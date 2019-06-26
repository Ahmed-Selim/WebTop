import { Settings } from './../../shared/models/settings.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  preferences: Settings;

  private _config: Subject<Settings> = new Subject<Settings>();
  config$ = this._config.asObservable();

  constructor() {
    const basic: Settings = {
      animation: true ,
      sound: true ,
      soundTrack: '',
      wallpaper: 'linear-gradient(to right, #1488cc, #2b32b2)',
      fontFamily: 'cursive',
      color: 'initial',
      fullScreen: true ,
      language: 'En',
      direction: true ,
      styleTheme: '',

      appStore: {
        direction: 'flex-row',
        background: 'linear-gradient(to right, rgba(41, 46, 73 , 0.6), rgba(83, 105, 118 , 0.6))',
        fontFamily: 'cursive',
        color: 'white',
        backgroundColor: 'initial',
        width: 'col-auto'
      },

      sideBar: {
        height: 45,
        width: 50,
        color: 'white',
        background: 'linear-gradient(to bottom, #4e54c8, #8f94fb)',
        taskbg: 'initial',
      }
    } ;
    this.load(basic);
    this.save();
  }

  load(basic: Settings) {
    this.preferences = JSON.parse(localStorage.getItem('preferences')) || basic ;
  }

  save() {
    localStorage.setItem('preferences', JSON.stringify(this.preferences));
  }

  update(configurations: Settings) {
    this.preferences = configurations;
    this._config.next(configurations);
    this.save();
  }

  fullScreen() {
    const elem: HTMLElement = document.documentElement;
    const methodToBeInvoked = elem.requestFullscreen
      || elem['webkitRequestFullScreen']
      || elem['mozRequestFullscreen']
      || elem['msRequestFullscreen'];
      if (document['fullscreen']) {
        document.exitFullscreen();
        // console.log('Full Screen: Off') ;
      } else if (methodToBeInvoked) {
        methodToBeInvoked.call(elem);
        // console.log('Full Screen: On') ;
    }
  }

}
