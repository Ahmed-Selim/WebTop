import { TimerService } from './../../../../core/services/timer.service';
import { AuthService } from './../../../../core/authentication/auth.service';
import { SettingsService } from './../../../../components/settings/settings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  BrandName = 'LolTeam' ;
  UserName = 'Ahmed Selim' ;
  isCollapsed = true;
  timeObj: {
    clock: string ,
    date: string ,
    day: string
  } ;

  constructor(public Auth: AuthService, public router: Router, private _time: TimerService, public _settings: SettingsService) {
    this.timeObj = _time.init() ;
  }


  ngOnInit() {
    setInterval(() => {
      this.timeObj = this._time.init();
    }, 1000);
  }

  logout () {
    // this.Auth.logout();
    this.Auth.signOut() ;
  }

}
