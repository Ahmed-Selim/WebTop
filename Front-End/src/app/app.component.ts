import { LoaderService } from './shared/components/loader/loader.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor (private http: HttpClient, private _loader: LoaderService) { }

  ngOnInit() {
    this._loader.show() ;
  }

  ngAfterViewInit(): void {
    this._loader.hide() ;
  }
}
