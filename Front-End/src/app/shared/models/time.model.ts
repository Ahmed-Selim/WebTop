import { Time } from './time' ;
import { Deserializable } from './deserializable.model';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export class TimeClass implements Time, Deserializable {
    date: Date;
    dayOfWeekNum: number;
    dayOfWeekStr: string;
    monthNum: number;
    monthStr: string;
    year: number;
    timeZoneOffsetNum: number;
    dayOfMonth: number;
    dayOfWeek: number;

    constructor(dateObj: Date) {
        this.date = dateObj ;
        this.dayOfWeekNum = dateObj.getDay();
        this.dayOfWeekStr = dayNames[this.dayOfWeekNum];
        this.monthNum = dateObj.getMonth() ;
        this.monthStr = monthNames[this.monthNum];
        this.year = dateObj.getFullYear() ;
        this.timeZoneOffsetNum = dateObj.getTimezoneOffset() ;
        this.dayOfMonth = dateObj.getDate() ;
        this.dayOfWeek = dateObj.getDay() ;
    }

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    print() {
        console.log('Day of Month : ' + this.dayOfMonth) ;
    }
}
