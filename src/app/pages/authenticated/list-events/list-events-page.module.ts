import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from '../../../interceptor/auth.interceptor';

import {
  EventGetAllService
} from '../../../services/index';

import { ListEventsPageComponent } from './list-events-page.component';

const routes: Routes = [
  {
    path: 'list-events',
    component: ListEventsPageComponent,
    data: {
      pageTitle: ''
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    ListEventsPageComponent
  ],
  providers: [
    EventGetAllService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ListEventsPageModule{ }
