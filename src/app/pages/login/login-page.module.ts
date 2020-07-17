import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  LoginModule
} from '../../components/index';

import { LoginPageComponent } from './login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      pageTitle: ''
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,
    
    LoginModule
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class LoginPageModule{ }
