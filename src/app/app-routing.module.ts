import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FundsComponent } from './funds/funds.component';
import { ManagerComponent } from './manager/manager.component';
import { PositionsComponent } from './positions/positions.component';


const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  // { path: 'managers', component: ManagerComponent },
  // { path: 'funds', component: FundsComponent },
  { path: 'fund/:id', component: PositionsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
