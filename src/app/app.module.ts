import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterOneComponent } from './router-one/router-one.component';
import { RouterTwoComponent } from './router-two/router-two.component';
import { Routes, RouterModule } from '@angular/router';
import { UnknowPageComponent } from './unknow-page/unknow-page.component';
import { MockModule } from './feature/mock.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposeMessgeComponent } from './compose-messge/compose-messge.component';
import { AuthguardService } from './authguard.service';
import { CanDeactivateService } from './can-deactivate.service';
import { AppResolverService } from './app-resolver.service';
import { LazyComponent } from './lazy/lazy.component';
import { MockDataContainerComponent } from './feature/mock-data-container/mock-data-container.component';

const router:Routes = [
  {
    path:'',
    redirectTo:'page1',
    pathMatch:'full'
  },
  {
    component:RouterOneComponent,
    path:'page1',    
  },
  {
    component:RouterTwoComponent,
    path:'page2',
    canDeactivate:[CanDeactivateService],
    resolve:{
      mockData: AppResolverService
    }    
  },
  {
    path: 'mock-data',
    loadChildren: () => import('./feature/mock.module').then( m => m.MockModule)
  },
  {
    path:'**',
    component:UnknowPageComponent
  },
  {
    path:'compose',
    component: ComposeMessgeComponent,
    outlet: 'popup'
  }
]



@NgModule({
  declarations: [
    AppComponent,
    RouterOneComponent,
    RouterTwoComponent,
    UnknowPageComponent,
    ComposeMessgeComponent,
    LazyComponent,
  ],
  imports: [
    BrowserModule,
    
    // MockModule,
    RouterModule.forRoot(
      router,
      // {enableTracing: true}
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
