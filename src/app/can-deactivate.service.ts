import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';
import { DialogService } from './dialog.service';

interface CanComponentDeactivate{
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;  
}


@Injectable({
  providedIn: 'root'
})


export class CanDeactivateService implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.dialogSV.confirm()
  }

  constructor(
    public dialogSV:DialogService
  ) { }
}
