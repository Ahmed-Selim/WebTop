import { Toast } from './../../shared/models/toast-notification.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type Severities = 'success' | 'info' | 'warn' | 'error';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  private toaster = new Subject<Toast>() ;
  alert$ = this.toaster.asObservable() ;

  constructor() { }

  showToast (message: Toast) {
    this.toaster.next(message) ;
  }

}
