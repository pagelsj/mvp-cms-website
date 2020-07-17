import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../../interceptor/auth.interceptor';

import { QuillModule } from 'ngx-quill';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';

import {
  ImageUploadModule,
  ProfileModule
} from '../../../components/index';
import { ProfilePostService } from '../../../services/index';

import { ProfilePageComponent } from './profile-page.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePageComponent,
    data: {
      pageTitle: ''
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,

    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          ['clean']
        ]
      }
    }),
    DatepickerModule.forRoot(),

    ProfileModule,
    ImageUploadModule
  ],
  exports: [
    ProfileModule,
  ],
  providers: [
    ProfilePostService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  declarations: [
    ProfilePageComponent
  ]
})
export class ProfilePageModule{ }
