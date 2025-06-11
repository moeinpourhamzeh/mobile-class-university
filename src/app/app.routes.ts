import { Routes } from '@angular/router';
import {List} from './_pages/list/list';
import {Add} from './_pages/add/add';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: List },
  { path: 'add', component: Add}
];
