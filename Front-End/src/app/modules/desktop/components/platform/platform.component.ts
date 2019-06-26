import { Operation, Window } from './../../../../shared/models/window.model';
import { WindowService } from './../../window/window.service';
import { ToastNotificationService } from './../../../../core/services/toast-notification.service';
import { SettingsService } from './../../../../components/settings/settings.service';
import { Component, OnInit, ViewChild, ViewContainerRef,
   ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { WindowComponent } from '../../window/window.component';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  @ViewChild('stage', { read: ViewContainerRef }) entry: ViewContainerRef;
  private winFactory: ComponentFactory<WindowComponent> ;
  private currentWin: Map< number, { ref: ComponentRef<WindowComponent>, win: Window } >
    = new Map() ;

  constructor(private resolver: ComponentFactoryResolver, private _window: WindowService,
    private _settings: SettingsService, private _toast: ToastNotificationService) { }

  ngOnInit() {
    this._window.window$.subscribe((op: Operation) => {
        switch (op.operation) {
          case 'insert':
            this.create(op.data) ;
            break;
          case 'close':
            this.destroy(op.windowId) ;
            break;
          case 'hide':
            this.hide(op.windowId);
            break;
          // case 'update':
          //   this.update(op.data) ;
          //   break;
      }
    });
    this.winFactory = this.resolver.resolveComponentFactory(WindowComponent);
  }

  create (win: Window) {
    const componentRef = this.entry.createComponent(this.winFactory);
    componentRef.instance.win = win ;
    this.currentWin.set(win.id, {ref: componentRef, win: win}) ;
    this._toast.showToast({severity: 'success', summary: 'Success Message', details: 'Window Created'});
  }

  // update (win: Window) {
  //   this.currentWin.set(win.id, {
  //     ref: this.currentWin.get(win.id).ref,
  //     win: win
  //   });
  //   this._toast.showToast({severity: 'success', summary: 'Success Message', details: 'Window Updated'});
  // }

  hide (id: number) {
    const win = this.currentWin.get(id).win ;
    win.isHidden = !win.isHidden ;
    this.currentWin.set(id, {
      ref: this.currentWin.get(id).ref,
      win: win
    }) ;
    this._window.updateWindow(win) ;
  }

  destroy (id: number) {
    this.currentWin.get(id).ref.destroy() ;
    this.currentWin.delete(id) ;
  }

  //////////////////////////////////////////////////////////////////

  wallpaper () {
    return this._settings.preferences.wallpaper ;
  }

  fontFamily() {
    return this._settings.preferences.fontFamily ;
  }

  color() {
    return this._settings.preferences.color ;
  }

  ltr() {
    return this._settings.preferences.direction ;
  }
}
