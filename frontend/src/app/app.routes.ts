import { Routes } from '@angular/router';
import { BoatListComponent } from './boat-list/boat-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
  { path: 'boats', component: BoatListComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', component: PageNotFoundComponent },
];
