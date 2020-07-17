import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GoogleMapsModule } from '@angular/google-maps'

import {
  ProfileModule
} from '../../components/index';
import {
  EventGetService
} from '../../services/index';
import {
  SanitizeHtmlPipeModule
} from '../../pipes/index';

import { EventPageComponent } from './event-page.component';

const routes: Routes = [
  {
    path: 'event/:title',
    component: EventPageComponent,
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

    GoogleMapsModule,

    SanitizeHtmlPipeModule,
    ProfileModule
  ],
  declarations: [

    EventPageComponent
  ],
  providers: [
    EventGetService
  ]
})
export class EventPageModule{ }
