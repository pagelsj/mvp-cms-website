import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  ProfileModule
} from '../../components/index';
import {
  ArticleGetService
} from '../../services/index';
import {
  SanitizeHtmlPipeModule
} from '../../pipes/index';

import { ExternalArticlePageComponent } from './external-article-page.component';

const routes: Routes = [
  {
    path: 'external-article/:title',
    component: ExternalArticlePageComponent,
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

    SanitizeHtmlPipeModule,
    ProfileModule
  ],
  declarations: [

    ExternalArticlePageComponent
  ],
  providers: [
    ArticleGetService
  ]
})
export class ExternalArticlePageModule{ }
