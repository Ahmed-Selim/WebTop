import { LoaderService } from './../../shared/components/loader/loader.service';
import { ErrorDialogService } from '../../shared/components/error-dialog/error-dialog.service';
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';

@Injectable() export class LoadingScreenInterceptor implements HttpInterceptor {

    constructor (private _loader: LoaderService, private _errorDialog: ErrorDialogService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this._loader.show() ;

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this._loader.hide() ;
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.message ? error.message : '',
                    status: error.status
                };
                this._loader.hide() ;
                this._errorDialog.openDialog(data);
                return throwError(error);
            }),
            finalize(() => {
                this._loader.hide();
            })
        );
    }
}
