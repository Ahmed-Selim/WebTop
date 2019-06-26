import { Subscription, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderState, LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements LoaderState, OnInit {

  show = false ;
  loadingState$: Observable<LoaderState> ;

  constructor(private _loaderService: LoaderService) { }

  ngOnInit() {
    this.loadingState$ = this._loaderService.loadingState ;
  }

}
