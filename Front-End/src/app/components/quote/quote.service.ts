import { Injectable } from '@angular/core';
import { QuoteClass } from 'src/app/shared/models/quote.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  public _qotd: QuoteClass ;
  private userId = Number (sessionStorage.getItem('uid') || localStorage.getItem('uid')) ;

  constructor(private http: HttpClient) {
    if (sessionStorage.getItem('qotd') !== null) {
      this._qotd = new QuoteClass(JSON.parse(sessionStorage.getItem('qotd')));
      return ;
    }
    this.http.get('https://favqs.com/api/qotd').subscribe((quote: JSON) => {
      this._qotd = new QuoteClass(quote) ;
      console.log(this._qotd);
      sessionStorage.setItem('qotd', JSON.stringify(quote)) ;
      sessionStorage.setItem('uid', '1') ;
    });
  }

  get quotes () {
    // return this.http.get(environment.api + 'quote') ;
    return this.http.get(environment.API + 'quotes') ;
  }

  get favs () {
    // return this.http.get(environment.api + `user/${this.userId}/quote/fav`);
    return this.http.get(environment.API + `quote_user/${this.userId}/fav`);
  }

  get likes () {
    // return this.http.get(environment.api + `user/${this.userId}/quote/like`);
    return this.http.get(environment.API + `quote_user/${this.userId}/like`);
  }

  like(id: number) {
    // this.http.get(environment.api + `user/${this.userId}/quote/${id}/like`).toPromise()
    this.http.post(environment.API + `quote_user/${this.userId}/${id}/like`, {}).toPromise()
      .then(res => console.log(res))
      .catch(error => console.log(error)) ;
  }

  fav(id: number) {
    // this.http.get(environment.api + `user/${this.userId}/quote/${id}/fav`).toPromise()
    this.http.post(environment.API + `quote_user/${this.userId}/${id}/fav`, {}).toPromise()
      .then(res => console.log(res))
      .catch(error => console.log(error)) ;
  }

  searchByAuthor (author: string) {
    // return this.http.get(environment.api + `user/${this.userId}/quote-author/${author}`) ;
    return this.http.get(environment.API + `quote_user/${this.userId}/author=${author}`) ;
  }

  searchByBody (body: string) {
    // return this.http.get(environment.api + `user/${this.userId}/quote-body/${body}`) ;
    return this.http.get(environment.API + `quote_user/${this.userId}/body=${body}`) ;
  }

  searchByTag (tag: string) {
    // return this.http.get(environment.api + `user/${this.userId}/quote-tag/${tag}`) ;
    return this.http.get(environment.API + `quote_user/${this.userId}/tag=${tag}`) ;
  }
}

