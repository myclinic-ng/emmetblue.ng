import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GetAQuoteComponent } from './get-a-quote/get-a-quote.component';
import { RequestADemoComponent } from './request-a-demo/request-a-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetAQuoteComponent,
    RequestADemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
