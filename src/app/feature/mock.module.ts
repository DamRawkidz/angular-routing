import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MockDataContainerComponent } from './mock-data-container/mock-data-container.component';
import { ListMockDataComponent } from './list-mock-data/list-mock-data.component';
import { MockDataComponent } from './mock-data/mock-data.component';
import { AuthguardService } from '../authguard.service';

const routes:Routes = [{
  component:MockDataContainerComponent,
  path:'',
  canActivate:[AuthguardService],
  canActivateChild:[AuthguardService],
  canLoad: [AuthguardService],
  children:[
    {
      path:'',
      component:ListMockDataComponent,
      data: { animation: 'heroes' }
    },
    {
      path:'detail-mock/:id',
      component:MockDataComponent,      
      data: { animation: 'hero' }
    }
  ]
}]
@NgModule({
  declarations: [
    MockDataContainerComponent,
    ListMockDataComponent,
    MockDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],  
})
export class MockModule { }
