import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ArticleGetCategoryService } from '../../services/index';
import { SanitizeHtmlPipeModule } from '../../pipes/index';

import { SelfGrowthPageComponent } from './self-growth-page.component';

const routes: Routes = [
  {
    path: 'self-growth',
    component: SelfGrowthPageComponent,
    data: {
      pageTitle: 'Self growth'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,

    SanitizeHtmlPipeModule
  ],
  providers: [
    ArticleGetCategoryService
  ],
  declarations: [
    SelfGrowthPageComponent
  ]
})
export class SelfGrowthPageModule{ }
