import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from '../app/components/add-user/add-user.component'
import {GetUserComponent} from './components/get-user/get-user.component'
import {UpdateUserComponent} from './components/update-user/update-user.component'

const routes: Routes = [
  { path: 'getUser', component: GetUserComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'updateUser', component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
