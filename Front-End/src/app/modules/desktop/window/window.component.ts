import { WindowService } from './window.service';
import { Window, Operation } from './../../../shared/models/window.model';
import { Component, OnInit, Input, ElementRef, HostBinding, HostListener } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DragRef, DragDrop } from '@angular/cdk/drag-drop';
import { SettingsService } from 'src/app/components/settings/settings.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  private cdkDragDrop: DragRef<any> ;

  @Input() win: Window ;

  @HostBinding('style') style: SafeStyle ;
  @HostBinding('attr.data-id') id: number ;
  @HostBinding('attr.hidden') get hide () { return this.win.isHidden ? '' : null ; }
  @HostBinding('class.rtl') get rtl () { return !this.ltr() && this.win.isMax ; }
  @HostBinding('style.z-index') get posZ () { return this.win.posZ ; }

  @HostListener('click', ['$event.target'])
  focus() {
    this._window.setFocus(this.win.id) ;
  }

  constructor(private elRef: ElementRef, private sanitizer: DomSanitizer,
     private _dragDrop: DragDrop, private _settings: SettingsService,
     private _window: WindowService) { }

  ngOnInit() {
    this._window.window$.subscribe((op: Operation) => {
      if (op.windowId === this.win.id
        && (op.operation === 'update'
            || op.operation === 'focus'
            || op.operation === 'resize'
            || op.operation === 'hide')) {
        this.win = op.data ;
      }
    });
    this.setStyle() ;
    this.makeDragDrop() ;
  }

  makeDragDrop () {
    this.cdkDragDrop = this._dragDrop.createDrag(this.elRef) ;
    this.cdkDragDrop.withHandles([this.elRef.nativeElement.querySelector('#Handler')])
        .withBoundaryElement(document.getElementById('Desktop'));
  }

  setStyle() {
    if (this.win.isMax) {
      this.style = this.sanitizer.bypassSecurityTrustStyle(`
        position: absolute;
        top: 40px ;
        left: 48px;
        right: 0px;
        bottom: 0px;
        width: auto;
        height: auto;
      `);
    } else {
      this.style = this.sanitizer.bypassSecurityTrustStyle(`
        position: absolute ;
        width: ${this.win.width}px ;
        height: ${this.win.height}px ;
      `);
    }
  }

  resize() {
    this.cdkDragDrop.reset();
    this._window.resize(this.win.id) ;
    this.setStyle();
  }

  toggleHide () {
    this._window.hide(this.win.id) ;
  }

  close() {
    this._window.closeWindow(this.win.id) ;
  }

//////////////////////////////////////////////////////////////////////////

  ltr() {
    return this._settings.preferences.direction ;
  }
}
