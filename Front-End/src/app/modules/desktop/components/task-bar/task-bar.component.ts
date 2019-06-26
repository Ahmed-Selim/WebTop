import { Operation, Window } from './../../../../shared/models/window.model';
import { WindowService } from './../../window/window.service';
import { DesktopService } from './../../desktop.service';
import { SettingsService } from './../../../../components/settings/settings.service';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent implements OnInit {

  tasks: Map<number, Window> = new Map() ;
  // @ViewChild('task', {read: TemplateRef}) task: TemplateRef<any>;
  // @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  constructor(private _settings: SettingsService, private _desktop: DesktopService,
    private _window: WindowService) { }

  ngOnInit() {
    this._window.window$.subscribe((op: Operation) => {
      switch (op.operation) {
        case 'insert':
        case 'update':
          this.create(op.data) ;
          break;
        case 'close':
          this.destroy(op.windowId) ;
          break;
        case 'hide':
          this.hide(op.windowId) ;
          break;
      }
    });
  }

  toggleStore (val?: boolean) {
    this._desktop.appStore(val) ;
  }

  create (win: Window) {
    // const componentRef = this.entry.createComponent(this.winFactory);
    // componentRef.instance.win = win ;
    this.tasks.set(win.id, win) ;
  }

  destroy (id: number) {
    this.tasks.delete(id) ;
  }

  hide (id: number) {
    const win = this.tasks.get(id) ;
    win.isHidden = !win.isHidden ;
    this.tasks.set(id, win) ;
    this._window.updateWindow(win) ;
  }

  //////////////////////////////////////////////////////////

  ltr() {
    return this._settings.preferences.direction ;
  }


}
