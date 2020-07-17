import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  RegisterModule,
  RegistrationConfirmationModule
} from '../../components/index';

import { RegisterPageComponent } from './register-page.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent,
    data: {
      pageTitle: ''
    }
  },
  {
    path: 'register/confirmation',
    component: RegisterPageComponent,
    data: {
      registered: true,
      pageTitle: ''
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,

    RegisterModule,
    RegistrationConfirmationModule
  ],
  declarations: [
    RegisterPageComponent
  ]
})
export class RegisterPageModule{ }
