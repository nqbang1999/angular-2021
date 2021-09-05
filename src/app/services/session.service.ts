import { Injectable } from '@angular/core';

const SESSION_KEY_LOGIN = 'userLogin';
const SESSION_KEY_REGISTER = 'userRegister';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public setSession(valueSession: string): void {
    window.sessionStorage.removeItem(SESSION_KEY_LOGIN);
    window.sessionStorage.setItem(SESSION_KEY_LOGIN, valueSession);
  }

  public getSession(): string | null {
    return window.sessionStorage.getItem(SESSION_KEY_LOGIN);
  }

  public removeSession(): void {
    return window.sessionStorage.removeItem(SESSION_KEY_LOGIN);
  }

  public setSessionRegister(valueSession: string): void {
    window.sessionStorage.removeItem(SESSION_KEY_REGISTER);
    window.sessionStorage.setItem(SESSION_KEY_REGISTER, valueSession);
  }

  public getSessionRegister(): string | null {
    return window.sessionStorage.getItem(SESSION_KEY_REGISTER);
  }

  public removeSessionRegister(): void {
    return window.sessionStorage.removeItem(SESSION_KEY_REGISTER);
  }




}
