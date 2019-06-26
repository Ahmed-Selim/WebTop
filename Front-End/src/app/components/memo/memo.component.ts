import { ToastNotificationService } from './../../core/services/toast-notification.service';
import { Component, OnInit } from '@angular/core';
import { MemoService } from './memo.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  memos: {
    title: string,
    text: string
  } ;

  title = '';
  text = '';

  warningMessage = null ;

  constructor(private _memo: MemoService, private _toast: ToastNotificationService) { }

  ngOnInit() {
    this.memos = JSON.parse(localStorage.getItem('memo')) || {} ;
  }

  open(title: string) {
    this.title = title ;
    this.text = this.memos[title] ;
  }

  save() {
    this.memos[this.title] = this.text ;
    localStorage.setItem('memo', JSON.stringify(this.memos));
    this.saveToast();
  }

  upload() {
    this._memo.upload({title: this.title, body: this.text}).subscribe(res => {
      console.log(res) ;
    }) ;
    console.log(this.text);
  }

  clear() {
    this.title = '' ;
    this.text = '' ;
    this.warningMessage = '' ;
    this.clearToast() ;
  }

  checkTitle () {
    if (Object.keys(this.memos).indexOf(this.title) >= 0) {
      this.warningMessage = 'This title already exist!' ;
    } else {
      this.warningMessage = null ;
    }
  }

  saveToast() {
    this._toast.showToast({severity: 'success', summary: 'Saved Successfully', details: `File '${this.title}' Saved`});
  }

  clearToast() {
    this._toast.showToast({severity: 'info', summary: 'Memo Cleared', details: `Clear Done!`});
  }

}
