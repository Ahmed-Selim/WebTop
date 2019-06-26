import { ToastNotificationService } from './../../services/toast-notification.service';
import { User } from 'src/app/shared/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpValidator } from '../auth.validator';
import { Toast } from 'src/app/shared/models/toast-notification.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: User ;

  signIn: FormGroup ;
    loginEmail: FormControl;
    loginPassword: FormControl;
    loginRemember: FormControl ;

  signUp: FormGroup ;
    firstname: FormControl ;
    lastname: FormControl ;
    username: FormControl ;
    profilePicture: FormControl ;
    country: FormControl ;
    city: FormControl ;
    state: FormControl ;
    birthday: FormControl ;
    gender: FormControl ;
    email: FormControl ;
    password: FormControl ;
    confirmPassword: FormControl ;

  Login_form = true;
  hide = true;
  rememberToken = true;
  validDate = new Date(new Date().setFullYear(new Date().getFullYear() - 16 /** 16 Years Old */)) ;
  countries: { id: number; sortname: string; name: string; phonecode: string; }[] ;
  cities: { id: number; name: string; country_id: string; }[] ;
  states: { id: number; name: string; state_id: string; }[] ;

  constructor(public Auth: AuthService, private route: ActivatedRoute, private router: Router,
    private _message: MessageService,
    private _toast: ToastNotificationService
  ) { }

  ngOnInit() {
    this.constructForms() ;
    this.Auth.user.subscribe((user: User) => {
      if (user) {
        this.router.navigate(['/']);
      }
      this.user = user ;
      console.log (user) ;
    });

    this._toast.alert$.subscribe((toast: Toast) => {
      this._message.add({severity: toast.severity, summary: toast.summary, detail: toast.details}) ;
    });

    this.Auth.signUpCountries().subscribe(res => {
      this.countries = res ;
    });

    this.country.valueChanges.subscribe(res => {
      this.state.enable();
      this.state.reset();
      this.city.disable();
    });
  }

  constructForms () {

      this.loginEmail = new FormControl('', [ Validators.required, Validators.email ]);
      this.loginPassword = new FormControl('', [ Validators.required, Validators.minLength(6) ]);
      this.loginRemember = new FormControl(true) ;
    this.signIn = new FormGroup ({
      email: this.loginEmail,
      password: this.loginPassword,
      rememberToken: this.loginRemember
    });

      this.firstname =  new FormControl('',
        [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z0-9 .-_]*')]) ;
      this.lastname =  new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z0-9 .-_]*')]) ;
      this.username =  new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z][a-zA-Z0-9 .-_]*')]) ;
      this.profilePicture =  new FormControl('', [Validators.required, ]) ;
      this.country =  new FormControl('', [Validators.required, ]) ;
      this.city =  new FormControl({value: '', disabled: true}, [Validators.required, ]) ;
      this.state =  new FormControl({value: '', disabled: true}, [Validators.required, ]) ;
      this.birthday =  new FormControl('', [Validators.required, ]) ;
      this.gender =  new FormControl('', [Validators.required, Validators.pattern('male|female')]) ;
      this.email =  new FormControl('', [Validators.required, Validators.email]) ;
      this.password =  new FormControl('', [Validators.required, Validators.minLength(6)]) ;
      this.confirmPassword =  new FormControl('', [Validators.required]) ;
    this.signUp = new FormGroup ({
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      profilePicture: this.profilePicture,
      country: this.country,
      city: this.city,
      state: this.state,
      birthday: this.birthday,
      gender: this.gender,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }, { validators: [SignUpValidator.mustMatch /* , SignUp.legalAge */ ] });

}

  userStateList () {
    this.Auth.userCountry(this.country.value.id).subscribe(res => {
      this.states = res ;
    });
  }

  userCityList () {
    this.Auth.userState(this.state.value.id).subscribe(res => {
      this.cities = res ;
    });
    this.city.enable();
    this.city.reset();
  }

  emailLogin () {
    const email = this.loginEmail.value ;
    const password = this.loginPassword.value ;
    this.Auth.emailLogin(email, password)
      .then(() => this._toast.showToast({severity: 'success', summary: 'SignIn Success', details: 'Email SignIn Successed'}))
      .catch(error => console.log(error)) ;
  }

  googleLogin() {
    this.Auth.googleLogin() ;
  }

  facebookLogin() {
    this.Auth.facebookLogin();
  }

  twitterLogin() {
    this.Auth.twitterLogin();
  }

  githubLogin() {
    this.Auth.githubLogin();
  }

  emailSignUp () {
    const user: User = {
      uid: '0',
      auth: 'user',
      email: this.email.value,
      photoURL: this.profilePicture.value,
      displayName: this.username.value,
      FirstName: this.firstname.value,
      LastName: this.lastname.value,
      birthDay: this.birthday.value.toISOString().split('T')[0],
      gender: this.gender.value,
      country: this.country.value,
      state: this.state.value,
      city: this.city.value,
    } ;
    console.log(user) ;
    this.Auth.emailSignUp(this.email.value, this.password.value)
      .then(() => {
        user.uid = this.user.uid ;
        this.Auth.updateUser(user.uid, user).catch(error => console.log(error)) ;
      }) ;
  }

  upload(file: File) {
    console.log(file);
  }

  submit(f) {
    // console.log(f);
  }

}
