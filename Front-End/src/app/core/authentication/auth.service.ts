import { ToastNotificationService } from './../services/toast-notification.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, Subject, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
// import 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase' ;

import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { auth } from 'firebase/app';
// import { User } from 'firebase';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router, private http: HttpClient,
    private _message: ToastNotificationService
  ) {

      //// Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges() ;
          } else {
            return of(null) ;
          }
        })
      ) ;
    }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider() ;
    return this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new auth.TwitterAuthProvider() ;
    return this.oAuthLogin(provider);
  }

  githubLogin() {
    const provider = new auth.GithubAuthProvider() ;
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new auth.FacebookAuthProvider() ;
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user) ;
      }) ;
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    } ;

    return userRef.set(data, { merge: true }) ;
    // .then(() => console.log('insert new user in firestore')) ;

  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        console.log(credential.user);
        return this.updateUserData(credential.user) ; // create(update) user document
      })
      .catch(error => this.handleError(error) );
  }

  // Update properties on the user document
  updateUser(userId: string, data: any) {
    return this.afs.doc(`users/${userId}`).update(data) ;
  }

  // If error, console log and notify user
  private handleError(error) {
    console.error(error) ;
    // this.notify.update(error.message, 'error') ;
    this._message.showToast({severity: 'error', summary: 'SignUp Failed', details: 'Email SignUp Failed'}) ;
  }

  signUpCountries () {
    return this.http.get<{
      id: number ,
      sortname: string ,
      name: string ,
      phonecode: string
    // }[]>(environment.api + 'loc/country') ;
    }[]>(environment.API + 'loc/country') ;
  }

  signUpCities () {
    return this.http.get<{
      id: number ,
      name: string ,
      state_id: string
    // }[]>(environment.api + 'loc/city') ;
    }[]>(environment.API + 'loc/city') ;
  }

  signUpStates () {
    return this.http.get<{
      id: number ,
      name: string ,
      country_id: string
    // }[]>(environment.api + 'loc/state') ;
    }[]>(environment.API + 'loc/state') ;
  }

  userCountry (id: number) {
    return this.http.get<{
      id: number ,
      name: string ,
      state_id: string
    // }[]>(environment.api + `loc/country/${id}`) ;
    }[]>(environment.API + `loc/country/${id}`) ;
  }

  userState (id: number) {
    return this.http.get<{
      id: number ,
      name: string ,
      country_id: string
    // }[]>(environment.api + `loc/state/${id}`) ;
    }[]>(environment.API + `loc/state/${id}`) ;
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }
}

//   sendEmailVerification() {
//     this.afAuth.auth.currentUser.sendEmailVerification();
//   }

//   sendPasswordResetEmail(Email: string) {
//     return this.afAuth.auth.sendPasswordResetEmail(Email);
//   }
