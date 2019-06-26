import { Window } from './../../../../shared/models/window.model';
import { WindowService } from './../../window/window.service';
import { AppStore } from './../../../../configs/apps.config';
import { SettingsService } from './../../../../components/settings/settings.service';
import { Component, OnInit, Input } from '@angular/core';
import { DesktopService } from '../../desktop.service';

@Component({
  selector: 'app-apps-store',
  templateUrl: './apps-store.component.html',
  styleUrls: ['./apps-store.component.css']
})
export class AppsStoreComponent implements OnInit {

  show: boolean;
  Apps: Window[] = AppStore ;
  constructor(private _desktop: DesktopService, private _settings: SettingsService,
    private _window: WindowService) { }

  ngOnInit() {
    this._desktop.show$.subscribe((val: boolean) => this.show = val);
  }

  toggle(val?: boolean) {
    this._desktop.appStore(val) ;
  }

  create (id: number) {
    this._window.insertWindow(this.Apps[id]) ;
  }

  ///////////////////////////////////////////////////////////////////////

  ltr() {
    return this._settings.preferences.direction ;
  }

  direction() {
    return this._settings.preferences.appStore.direction ;
  }

  background () {
    return this._settings.preferences.appStore.background ;
  }

  color() {
    return this._settings.preferences.appStore.color ;
  }

  size() {
    return this._settings.preferences.appStore.width ;
  }

}
