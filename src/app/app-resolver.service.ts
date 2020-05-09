import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppResolverService implements Resolve<any> {
  resolve(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ) {
    return of([1,2,3,4,5]).pipe(
      delay(1000)
    )
  }

  constructor() { }
}
