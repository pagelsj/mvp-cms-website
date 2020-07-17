import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { JoinUsPageComponent } from './join-us-page.component';

const routes: Routes = [
  {
    path: 'join-us',
    component: JoinUsPageComponent,
    data: {
      pageTitle: 'Join us'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClientModule
  ],
  declarations: [
    JoinUsPageComponent
  ]
})
export class JoinUsPageModule{ }
