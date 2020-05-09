import { Component } from '@angular/core';
import { slideInAnimation } from './animation';
import { RouterOutlet } from '@angular/router';
import { FakeAuthService } from './fake-auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'ng-router';

  constructor(
    public authSV: FakeAuthService
  ){}

  getAnimationData(outlet: RouterOutlet) {
    // console.log(outlet.activatedRouteData)    
    return 'heroes'
  }
 
  login(){
    this.authSV.login().pipe(
      tap(x => alert(x))
    ).subscribe()
  }

  logout(){
    this.authSV.logout()
  }
}
