import { Operation, Window } from './../../../shared/models/window.model';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  private id = 0 ;
  private focus = 0 ;
  private currentWindows: Map<number, Window> = new Map() ;

  private window: Subject<Operation> = new Subject<Operation>() ;
  window$: Observable<Operation> = this.window.asObservable() ;

  constructor() { }

  getWindow (id: number): Window {
    if (this.currentWindows.has(id)) {
      return this.currentWindows.get(id) ;
    }
  }

  insertWindow(win: Window) {
    win.id = this.id++ ;
    win.posZ = this.focus++ ;
    this.currentWindows.set(win.id, win);
    this.window.next(<Operation>{
      windowId: win.id,
      operation: 'insert',
      data: win
    });
  }

  closeWindow(id: number) {
    // if (!this.currentWindows.has(id)) {
    //   return ;
    // }
    // this.currentWindows.delete(id) ;
    this.window.next(<Operation>{
      windowId: id,
      operation: 'close'
    });
  }

  updateWindow(win: Window) {
    // if (!this.currentWindows.has(win.id)) {
    //   this.insertWindow(win) ;
    //   return ;
    // }
    win.posZ = this.focus++ ;
    this.window.next(<Operation>{
      windowId: win.id,
      operation: 'update',
      data: win
    });
  }

  setFocus (id: number) {
    const win = this.getWindow(id) ;
    win.posZ = this.focus++ ;
    this.window.next(<Operation>{
      windowId: id,
      operation: 'focus',
      data: win
    });
  }

  resize (id: number) {
    const win = this.getWindow(id) ;
    win.isMax = !win.isMax ;
    win.posZ = this.focus++ ;
    this.window.next(<Operation>{
      windowId: id,
      operation: 'resize',
      data: win
    });
  }

  hide(id: number) {
    const win = this.getWindow(id) ;
    win.isHidden = !win.isHidden ;
    win.posZ = this.focus++ ;
    this.window.next(<Operation>{
      windowId: id,
      operation: 'hide',
      data: win
    });
  }

}
