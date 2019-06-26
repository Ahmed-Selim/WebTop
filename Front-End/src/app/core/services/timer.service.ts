import { TimeClass } from './../../shared/models/time.model';
import { Injectable } from '@angular/core';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

@Injectable({
  providedIn: 'root'
})
export class TimerService {


  timeObj: TimeClass;

  constructor() {
    this.timeObj = new TimeClass(new Date()) ;
  }

  init() {
    const now = new Date() ;
    const arr = now.toString().split(' ') ;
    /*
      [0] : day name
      [1] : month name
      [2] : day
      [3] : year
      [4] : clock   // 24-Hour
    */
    const temp = now.toLocaleDateString().split('/') ;

    return {
      day: arr[0],
      clock: this.formatAMPM(now),
      date: `${temp[1]}/${temp[0]}/${temp[2]}`
    };

  }

  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'Pm' : 'Am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ':' + date.getSeconds() + ' ' + ampm;
    return strTime;
  }
}
