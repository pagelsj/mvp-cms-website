import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from '../../../interceptor/auth.interceptor';

import {
  ArticleGetAllService
} from '../../../services/index';

import { ListArticlesPageComponent } from './list-articles-page.component';

const routes: Routes = [
  {
    path: 'list-articles',
    component: ListArticlesPageComponent,
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
    ListArticlesPageComponent
  ],
  providers: [
    ArticleGetAllService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ListArticlesPageModule{ }
