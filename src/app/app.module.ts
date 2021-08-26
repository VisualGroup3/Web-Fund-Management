import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecuritiesComponent } from './securities/securities.component';
import { FundsComponent } from './funds/funds.component';
import { HttpClientModule} from '@angular/common/http';
//import { ResultTableComponent } from './result-table/result-table.component';
import { FormComponent } from './form/form.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PositionsComponent } from './positions/positions.component';
import { FormsModule } from '@angular/forms';

import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SecuritiesComponent,
    FundsComponent,
    //ResultTableComponent,
    FormComponent,
    ResultTableComponent,
    NavBarComponent,
    PositionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
=======
    FormsModule
>>>>>>> 705cf32426f482498ef25c12b88118d24cdad74f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
