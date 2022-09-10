import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonutdetailComponent } from './components/donutdetail/donutdetail.component';
import { DonuthomeComponent } from './components/donuthome/donuthome.component';
import {MatButtonModule} from '@angular/material/button';
import { CartComponent } from './components/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    DonutdetailComponent,
    DonuthomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
