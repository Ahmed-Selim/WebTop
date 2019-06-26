import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  private userId = Number (sessionStorage.getItem('uid') || localStorage.getItem('uid')) ;

  constructor(private http: HttpClient) { }

  get Memos() {
    // return this.http.get(environment.api + `user/${this.userId}/memo`) ;
    return this.http.get(environment.API + `users/${this.userId}/memos`) ;
  }

  upload(memo: { title: string, body: string }) {
    const memory = {
      'title': memo.title,
      'file': memo.body,
      'user_id': this.userId,
      'size': memo.body.length,
    };
    // return this.http.post(environment.api + `memo`, memory) ;
    return this.http.post(environment.API + `memos`, memory) ;
  }

}
