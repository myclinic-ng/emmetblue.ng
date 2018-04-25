import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { ProviderSignupComponent } from './provider-signup/provider-signup.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

export const routes: Routes = [
		{ path: '', component: HomeComponent },
		{ path: 'schedule-meeting', component: RequestDemoComponent},
		{ path: 'get-started', component: ProviderSignupComponent},
		{ path: 'coming-soon', component: ComingSoonComponent}

]