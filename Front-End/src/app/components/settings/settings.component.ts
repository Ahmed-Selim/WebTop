import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/shared/models/settings.model';
import { SettingsService } from '../settings/settings.service';
import { Init } from 'src/app/configs/settings.config';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  tab = 0 ;
  Tabs = [
    {
      title: 'Core Settings',
      icon: ['fas', 'globe']
    },
    {
      title: 'App Store',
      icon: ['fas', 'store-alt']
    },
    {
      title: 'Task Bar',
      icon: ['fas', 'tasks']
    }
  ];

  preferences: Settings ;
  default = Init ;
  constructor(private settings: SettingsService) { }

  ngOnInit() {
    this.preferences = this.settings.preferences ;
    this.settings.config$.subscribe(res => {
      this.preferences = res ;
      console.log(res) ;
    });
  }

  update() {
    this.settings.update(this.preferences) ;
  }

  log() {
    console.log(this.preferences) ;
  }

}
