import { ToastNotificationService } from './../../core/services/toast-notification.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  // equal = eval ;
  off = false;

  calculator = new FormGroup({
    math: new FormControl('0', [
      Validators.required,
      // Validators.pattern('^[0-9]+[\+\-[0-9]+]*$')
    ])
  });

  constructor(private toast: ToastNotificationService) {}

  ngOnInit() {}

  key(key: string) {
    switch (key) {
      case 'OFF':
        this.off = !this.off;
        if (this.off) {
          this.calculator.get('math').disable();
          this.exp = 'Off';
        } else {
          this.calculator.get('math').enable();
          this.exp = '0';
        }
        break;
      case 'C':
        this.exp = '0';
        break;
      case 'AC':
        this.exp = this.exp.substr(0, this.exp.length - 1);
        break;
      case 'sqrt':
        this.exp = this.ans(`Math.sqrt('${this.exp}')`);
        break;
      case '=':
        try {
          // this.exp = this.equal(this.exp) ;
          this.exp = this.ans(this.exp);
        } catch (error) { // SyntaxError
          // console.log(error);
          // console.log(error.constructor.name);
          this.toast.showToast({
            severity: 'error',
            summary: 'Invalid Expression',
            details: 'You have entered an Invalid Mathematical Expression!'
          });
          // console.log(typeof error);
        }
        break;
      default:
        this.exp = (this.exp === '0') ? key : this.exp + key;
        console.log(key);
        break;
    }
  }

  get exp(): string {
    return this.calculator.get('math').value;
  }

  set exp(key: string) {
    this.calculator.get('math').setValue(key);
  }

  ans(exp: string): string {
    return Function('"use strict";return (' + exp + ').toString()')();
  }

}
