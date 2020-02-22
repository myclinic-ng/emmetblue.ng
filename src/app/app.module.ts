import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { ProviderSignupComponent } from './provider-signup/provider-signup.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

import { HttpService } from './http.service';
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestDemoComponent,
    ProviderSignupComponent,
    ComingSoonComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
