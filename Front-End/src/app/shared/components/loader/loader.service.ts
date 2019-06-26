import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface LoaderState {
  show: boolean ;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private activeProcesses = 0 ;
  private loaderSubject: Subject<LoaderState> = new Subject<LoaderState>();
  loadingState: Observable<LoaderState> = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    ++this.activeProcesses ;
    this.loaderSubject.next({ show: true });
  }

  hide() {
    if (--this.activeProcesses > 0) {
      return ;
    }
    this.loaderSubject.next({ show: false });
  }
}
