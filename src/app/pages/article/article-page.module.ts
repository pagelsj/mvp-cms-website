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

import { ArticlePageComponent } from './article-page.component';

const routes: Routes = [
  {
    path: 'article/:title',
    component: ArticlePageComponent,
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

    ArticlePageComponent
  ],
  providers: [
    ArticleGetService
  ]
})
export class ArticlePageModule{ }
