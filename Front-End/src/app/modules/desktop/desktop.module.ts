import { WebHubComponent } from './../../components/web-hub/web-hub.component';
import { CalculatorComponent } from './../../components/calculator/calculator.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { GlobalModule } from './../common-imports/global.module';
import { PrimeNgModule } from './../common-imports/prime-ng.module';
import { MaterialDesignModule } from './../common-imports/material-design.module';
import { WindowService } from './window/window.service';
import { DesktopRoutingModule } from './desktop-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { TaskBarComponent } from './components/task-bar/task-bar.component';
import { AppsStoreComponent } from './components/apps-store/apps-store.component';
import { PlatformComponent } from './components/platform/platform.component';
import { WindowComponent } from './window/window.component';
import { CoreModule } from 'src/app/core/core.module';
import { EditorComponent } from 'src/app/components/editor/editor.component';
import { QuoteComponent } from 'src/app/components/quote/quote.component';
import { MemoComponent } from 'src/app/components/memo/memo.component';
import { ClockComponent } from 'src/app/components/clock/clock.component';
import { WeatherComponent } from 'src/app/components/weather/weather.component';
import { MusicComponent } from 'src/app/components/music/music.component';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { TodoComponent } from 'src/app/components/todo/todo.component';

@NgModule({
  declarations: [
    DesktopComponent,
    HeaderBarComponent,
    TaskBarComponent,
    AppsStoreComponent,
    PlatformComponent,
    WindowComponent,
    SettingsComponent,
    CalculatorComponent,
    EditorComponent,
    QuoteComponent,
    MemoComponent,
    ClockComponent,
    WeatherComponent,
    MusicComponent,
    MoviesComponent,
    TodoComponent,
    WebHubComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialDesignModule,
    PrimeNgModule,
    DesktopRoutingModule,
    GlobalModule,
  ],
  exports: [
    DesktopRoutingModule,
    DesktopComponent,
    HeaderBarComponent,
    TaskBarComponent,
    AppsStoreComponent,
    PlatformComponent,
    WindowComponent
  ],
  providers: [
    WindowService
  ],
  entryComponents: [
    WindowComponent,
    SettingsComponent,
    CalculatorComponent,
    EditorComponent,
    QuoteComponent,
    MemoComponent,
    ClockComponent,
    WeatherComponent,
    MusicComponent,
    MoviesComponent,
    TodoComponent,
    WebHubComponent
  ]
})
export class DesktopModule { }
