import { Component, OnInit } from '@angular/core';
import { QuoteClass } from 'src/app/shared/models/quote.model';
import { Observable } from 'rxjs';
import { QuoteService } from './quote.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public qotd: QuoteClass;
  Quotes$: Observable<Object>; emptyQuote: boolean;
  fav$: Observable<Object>; emptyFav: boolean;
  like$: Observable<Object>; emptyLike: boolean;
  search$: Observable<Object>; emptySearch: boolean;
  tab = 0;

  Tabs = [
    {
      title: 'Quote of The Day',
      icon: ['fas', 'quote-left']
    },
    {
      title: 'Quotes',
      icon: ['fas', 'th-list']
    },
    {
      title: 'My Favorites',
      icon: ['fas', 'heart']
    },
    {
      title: 'My Likes',
      icon: ['fas', 'thumbs-up']
    },
    {
      title: 'Seach Quotes',
      icon: ['fas', 'search']
    }
  ];

  search = new FormGroup({
    category: new FormControl('', [ Validators.required ]),
    query: new FormControl('', [ Validators.required ])
  });

  constructor(public _quote: QuoteService) { }


  ngOnInit() {
    this.qotd = this._quote._qotd;
    this.Quotes$ = this._quote.quotes;
    this.fav$ = this._quote.favs;
    this.like$ = this._quote.likes;

    this.Quotes$.subscribe((res: Array<any>) => this.emptyQuote = res.length === 0 );
    this.like$.subscribe((res: Array<any>) => this.emptyLike = res.length === 0 );
    this.fav$.subscribe((res: Array<any>) => this.emptyFav = res.length === 0 );
  }

  log() {
    console.log(this.tab);
  }

  find() {
    const category = this.search.get('category').value;
    const query = this.search.get('query').value;

    switch (category) {
      case 'author':
        this.search$ = this._quote.searchByAuthor(query);
        break;

      case 'body':
        this.search$ = this._quote.searchByBody(query);
        break;

      case 'tag':
        this.search$ = this._quote.searchByTag(query);
        break;
    }

    this.search$.subscribe((res: Array<any>) => {
      console.log(res);
      this.emptySearch = res.length === 0;
    });
  }

}
