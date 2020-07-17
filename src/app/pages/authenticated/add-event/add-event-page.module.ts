import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../../interceptor/auth.interceptor';

import { QuillModule } from 'ngx-quill';
import { GoogleMapsModule } from '@angular/google-maps'
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import {
  ImageUploadModule
} from '../../../components/index';
import {
  EventGetService,
  EventPostService,
  EventUpdateService,
  EventDeleteService,
  GeoEncodeService
} from '../../../services/index';

import { AddEventPageComponent } from './add-event-page.component';

const routes: Routes = [
  {
    path: 'add-event',
    component: AddEventPageComponent,
    data: {
      pageTitle: ''
    }
  },
  {
    path: 'edit-event/:title',
    component: AddEventPageComponent,
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
    ReactiveFormsModule,
    ImageUploadModule,
    GoogleMapsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          ['link'],
          ['clean']
        ]
      }
    }),
    TimepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  exports:[
  ],
  declarations: [
    AddEventPageComponent
  ],
  providers: [
    HttpClientModule,
    EventGetService,
    EventPostService,
    EventUpdateService,
    EventDeleteService,
    GeoEncodeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AddEventPageModule{ }
