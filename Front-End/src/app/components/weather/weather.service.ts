import { Injectable } from '@angular/core';
import { WeatherClass } from 'src/app/shared/models/weather.model';
import { fakeWeather } from 'src/assets/providers/FakeProvider';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public _weather: WeatherClass;

  constructor(private http: HttpClient) {
    if (sessionStorage.getItem('weather') !== null) {
      this._weather = new WeatherClass(JSON.parse(sessionStorage.getItem('weather')));
      return ;
    }
    this._weather = new WeatherClass(fakeWeather);
    // console.log(this._weather);

    // this.http.get('https://www.metaweather.com/api/location/1522006')
    //   .subscribe(
    //     (response) => {
    //       this._weather = new WeatherClass(response);
    //       console.log(response);
    //     },
    //     (err) => {
    //       console.log(err) ;
    //       this._weather = new WeatherClass(fakeWeather);
    //     }
    //   ) ;

    // this.Weather() ;

    sessionStorage.setItem('weather', JSON.stringify(this._weather)) ;
  }

  Weather (): void {
    // if (sessionStorage.getItem('weather') !== null) {
    //   this._weather = new WeatherClass(JSON.parse(sessionStorage.getItem('weather')));
    // }

    this.http.jsonp('https://www.metaweather.com/api/location/1522006', 'callback').subscribe(
        (response) => {
          console.log(response);
          this._weather = new WeatherClass(fakeWeather);
        },
        (err) => {
          console.log(err) ;
          this._weather = new WeatherClass(fakeWeather);
        }) ;
  }

}
