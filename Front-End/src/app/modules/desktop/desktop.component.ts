import { Toast } from './../../shared/models/toast-notification.model';
import { ToastNotificationService } from './../../core/services/toast-notification.service';
import { MessageService } from 'primeng/api';
import { LoaderService } from './../../shared/components/loader/loader.service';
import { QuoteService } from './../../components/quote/quote.service';
import { WindowService } from './window/window.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit, AfterViewInit {

  constructor(private _loader: LoaderService, private _win: WindowService, private _message: MessageService,
    private _toast: ToastNotificationService, private _quote: QuoteService) {}

  ngOnInit() {
    this._loader.show() ;
    // this._message.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
    this._toast.alert$.subscribe((toast: Toast) => {
      this._message.add({severity: toast.severity, summary: toast.summary, detail: toast.details}) ;
    });
  }

  ngAfterViewInit(): void {
    this._loader.hide() ;
  }

}
