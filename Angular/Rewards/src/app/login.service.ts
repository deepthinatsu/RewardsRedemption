import { Injectable } from '@angular/core';
import { Login } from './Login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  loggedIn: boolean;
  login: Login;

  loginUser(login: Login ){
    this.login = login;
    this.loggedIn = true;
  }

  getLoginDetails(){
    return this.login;
  }
}
