import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesktopService {

  appsShow = new BehaviorSubject<boolean>(false) ;
  show$ = this.appsShow.asObservable() ;

  constructor() { }

  appStore (val?: boolean) {
    this.appsShow.next(val || !this.appsShow.getValue()) ;
  }
}
