import { GlobalModule } from './../modules/common-imports/global.module';
import { MessageService } from 'primeng/api';
import { CoreRoutingModule } from './core-routing.module';
import { TimerService } from './services/timer.service';
import { AuthService } from './authentication/auth.service';
import { LoaderService } from './../shared/components/loader/loader.service';
import { ErrorDialogService } from './../shared/components/error-dialog/error-dialog.service';
import { ErrorDialogComponent } from './../shared/components/error-dialog/error-dialog.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingScreenInterceptor } from './interceptors/loading-screen.interceptor';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { ToastNotificationService } from './services/toast-notification.service';
import { MaterialDesignModule } from '../modules/common-imports/material-design.module';
import { PrimeNgModule } from '../modules/common-imports/prime-ng.module';


@NgModule({
  declarations: [
    LoaderComponent,
    ErrorDialogComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialDesignModule,
    PrimeNgModule,
    GlobalModule
  ],
  providers: [
    AuthService,
    ErrorDialogService,
    MessageService,
    ToastNotificationService,
    LoaderService,
    AuthService,
    TimerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingScreenInterceptor, multi: true }
  ],
  exports: [
    LoaderComponent,
    ErrorDialogComponent
  ],
  entryComponents: [
    LoaderComponent,
    ErrorDialogComponent
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
