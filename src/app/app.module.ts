import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { SecuritiesComponent } from './securities/securities.component';
import { FundsComponent } from './funds/funds.component';
import { HttpClientModule} from '@angular/common/http';
//import { ResultTableComponent } from './result-table/result-table.component';
import { FormComponent } from './form/form.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ManagerComponent } from './manager/manager.component';
import { PositionsComponent } from './positions/positions.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    SecuritiesComponent,
    FundsComponent,
    //ResultTableComponent,
    FormComponent,
    ResultTableComponent,
    NavBarComponent,
    ManagerComponent,
    PositionsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
