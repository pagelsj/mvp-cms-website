import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../../interceptor/auth.interceptor';

import { QuillModule } from 'ngx-quill';

import {
  ImageUploadModule
} from '../../../components/index';
import {
  ArticleGetService,
  ArticlePostService,
  ArticleUpdateService,
  ArticleDeleteService
} from '../../../services/index';

import { AddExternalArticlePageComponent } from './add-external-article-page.component';

const routes: Routes = [
  {
    path: 'add-external-article',
    component: AddExternalArticlePageComponent,
    data: {
      pageTitle: ''
    }
  },
  {
    path: 'edit-external-article/:title',
    component: AddExternalArticlePageComponent,
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
    })
  ],
  exports:[
  ],
  declarations: [
    AddExternalArticlePageComponent
  ],
  providers: [
    HttpClientModule,
    ArticleGetService,
    ArticlePostService,
    ArticleUpdateService,
    ArticleDeleteService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AddExternalArticlePageModule{ }
