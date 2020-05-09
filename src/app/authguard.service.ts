import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, NavigationExtras, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeAuthService } from './fake-auth.service';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate,CanActivateChild,CanLoad {
  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    let url = `/${route.path}`;

    return this.checkLogin(url)
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute,state)
  }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let url: string = state.url;
    console.log(url);    
    return this.checkLogin(url)
  }

  constructor(
    public authSV:FakeAuthService,
    public route: Router
  ) { }

  checkLogin(url :string){
    if(this.authSV.isLogIn) {return true}

    this.authSV.redirectUrl = url
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': 12345 },
      fragment: 'anchor'
    };
    this.route.navigate(['/'], navigationExtras)
    return false
  }
}
