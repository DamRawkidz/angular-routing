import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {
  isLogIn = false

  redirectUrl: string = ''
  constructor() { }

  login() :Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap( val => this.isLogIn = true)
    )
  }

  logout(){
    this.isLogIn = false
  }
}
