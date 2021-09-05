import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const API_LOCAL_HOST = 'http://troioi260820211058-env.eba-brdjnt62.us-east-2.elasticbeanstalk.com/bangquang/';
const USER_LOGIN = 'login';
const USER_REGISTER = 'register';
const USER_GET_INFO = 'get-user-info/';
const USER_CHANGE_PASSWORD = 'change-password/';

// Represents the header configuration options for an HTTP request.
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(API_LOCAL_HOST + USER_LOGIN, {
      username,
      password
    });
  }

  register(usernameInput: string, emailInput: string, passwordInput: string, re_passwordInput: string): Observable<any> {
    return this.http.post(API_LOCAL_HOST + USER_REGISTER, {
      usernameInput,
      emailInput,
      passwordInput,
      re_passwordInput
    });
  }

  getUserInfo(usernameInput: String): Observable<any> {
    return this.http.get(API_LOCAL_HOST + USER_GET_INFO + usernameInput);
  }

  changePassword(loginUsername: string, currentPassword: string, newPassword: string, confirmedNewPassword: string): Observable<any> {
    return this.http.put(API_LOCAL_HOST + USER_CHANGE_PASSWORD + loginUsername, {
      currentPassword, newPassword, confirmedNewPassword
    });
  }

}

