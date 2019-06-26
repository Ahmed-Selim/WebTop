import { Component, OnInit } from '@angular/core';
import { WeatherClass } from 'src/app/shared/models/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: [
    './weather.component.css',
  ]
})
export class WeatherComponent implements OnInit {

  public weather: WeatherClass;

  constructor(private _climate: WeatherService) { }

  ngOnInit() {
    this.weather = this._climate._weather ;
  }

}
