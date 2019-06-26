
import { Deserializable } from './deserializable.model';

export class WeatherUnit implements Deserializable {

  private _id: number ;
  private _weather_state_name: string ;
  private _weather_state_abbr: string ;
  private _wind_direction_compass: string ;
  private _created: Date   ;
  private _applicable_date: Date   ;
  private _min_temp: number ;
  private _max_temp: number ;
  private _the_temp: number ;
  private _wind_speed: number ;
  private _wind_direction: number ;
  private _air_pressure: number ;
  private _humidity: number ;
  private _visibility: number ;
  private _predictability: number ;

  constructor(json: object) {
    this._id = Number(json['id']) ;
    this._weather_state_name = json['weather_state_name'] ;
    this._weather_state_abbr = json['weather_state_abbr'] ;
    this._wind_direction_compass = json['wind_direction_compass'] ;
    this._created = json['created'] ;
    this._applicable_date = json['applicable_date'] ;
    this._min_temp = Number(json['min_temp']) ;
    this._max_temp = Number(json['max_temp']) ;
    this._the_temp = Number(json['the_temp']) ;
    this._wind_speed = Number(json['wind_speed']) ;
    this._wind_direction = Number(json['wind_direction']) ;
    this._air_pressure = Number(json['air_pressure']) ;
    this._humidity = Number(json['humidity']) ;
    this._visibility = Number(json['visibility']) ;
    this._predictability = Number(json['predictability']) ;
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

  public get id(): number  {
    return this._id;
  }

  public get weather_state_name(): string  {
    return this._weather_state_name;
  }

  public get weather_state_abbr(): string  {
    return this._weather_state_abbr;
  }

  public get wind_direction_compass(): string  {
    return this._wind_direction_compass;
  }

  public get created(): Date    {
    return this._created;
  }

  public get applicable_date(): Date    {
    return this._applicable_date;
  }

  public get min_temp(): number  {
    return this._min_temp;
  }

  public get max_temp(): number  {
    return this._max_temp;
  }

  public get the_temp(): number  {
    return this._the_temp;
  }

  public get wind_speed(): number  {
    return this._wind_speed;
  }

  public get wind_direction(): number  {
    return this._wind_direction;
  }

  public get air_pressure(): number  {
    return this._air_pressure;
  }

  public get humidity(): number  {
    return this._humidity;
  }

  public get visibility(): number  {
    return this._visibility;
  }

  public get predictability(): number  {
    return this._predictability;
  }

  public set id(value: number ) {
    this._id = value;
  }

  public set weather_state_name(value: string ) {
    this._weather_state_name = value;
  }

  public set weather_state_abbr(value: string ) {
    this._weather_state_abbr = value;
  }

  public set wind_direction_compass(value: string ) {
    this._wind_direction_compass = value;
  }

  public set created(value: Date   ) {
    this._created = value;
  }

  public set applicable_date(value: Date   ) {
    this._applicable_date = value;
  }

  public set min_temp(value: number ) {
    this._min_temp = value;
  }

  public set max_temp(value: number ) {
    this._max_temp = value;
  }

  public set the_temp(value: number ) {
    this._the_temp = value;
  }

  public set wind_speed(value: number ) {
    this._wind_speed = value;
  }

  public set wind_direction(value: number ) {
    this._wind_direction = value;
  }

  public set air_pressure(value: number ) {
    this._air_pressure = value;
  }

  public set humidity(value: number ) {
    this._humidity = value;
  }

  public set visibility(value: number ) {
    this._visibility = value;
  }

  public set predictability(value: number ) {
    this._predictability = value;
  }

}

export class WeatherClass implements Deserializable {

  private _consolidatedWeather: WeatherUnit[] ;
  private _time: Date;
  private _sun_rise: Date;
  private _sun_set: Date;
  private _timezone_name: string;
  private _parent: {
      title: string ,
      location_type: string ,
      woeid: number ,
      latt_long: string
  };
  private _sources: {
      title: string ,
      slug: string ,
      url: string ,
      crawl_rate: number
  };
  private _title: string;
  private _location_type: string;
  private _woeid: number;
  private _latt_long: string;
  private _timezone: string;

  constructor (json: object) {
    this._consolidatedWeather = json['consolidated_weather'] ;
    this._time = json['time'] ;
    this._sun_rise = json['sun_rise'] ;
    this._sun_set = json['sun_set'] ;
    this._timezone_name = json['timezone_name'] ;
    this._parent = json['parent'] ;
  //   this._sources = json['sources'] ;
    this._title = json['title'] ;
    this._location_type = json['location_type'] ;
    this._woeid = Number(json['woeid']) ;
    this._latt_long = json['latt_long'] ;
    this._timezone = json['timezone'] ;
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

  public get consolidatedWeather(): WeatherUnit[]  {
    return this._consolidatedWeather;
  }

  public get time(): Date {
    return this._time;
  }

  public get sun_rise(): Date {
    return this._sun_rise;
  }

  public get sun_set(): Date {
    return this._sun_set;
  }

  public get timezone_name(): string {
    return this._timezone_name;
  }

  public get title(): string {
    return this._title;
  }

  public get location_type(): string {
    return this._location_type;
  }

  public get woeid(): number {
    return this._woeid;
  }

  public get latt_long(): string {
    return this._latt_long;
  }

  public get timezone(): string {
    return this._timezone;
  }

  public get parent(): {
        title: string ,
        location_type: string ,
        woeid: number ,
        latt_long: string
    } {
      return this._parent ;
  }

  public set consolidatedWeather(value ) {
    const climate: WeatherUnit[] = Object.keys(value).map(key => {
        return new WeatherUnit(JSON.parse(key)) ;
    });
    this._consolidatedWeather = climate;
  }

  public set time(value: Date) {
    this._time = value;
  }

  public set sun_rise(value: Date) {
    this._sun_rise = value;
  }

  public set sun_set(value: Date) {
    this._sun_set = value;
  }

  public set timezone_name(value: string) {
    this._timezone_name = value;
  }

  public set title(value: string) {
    this._title = value;
  }

  public set location_type(value: string) {
    this._location_type = value;
  }

  public set woeid(value: number) {
    this._woeid = value;
  }

  public set latt_long(value: string) {
    this._latt_long = value;
  }

  public set timezone(value: string) {
    this._timezone = value;
  }
}
