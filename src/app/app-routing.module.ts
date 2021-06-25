import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RequestADemoComponent } from './request-a-demo/request-a-demo.component';
import { GetAQuoteComponent } from './get-a-quote/get-a-quote.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "request-a-demo",
    component: RequestADemoComponent
  },
  {
    path: "get-a-quote",
    component: RequestADemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
