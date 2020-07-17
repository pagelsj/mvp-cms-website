import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  TagGetService
} from '../../services/index';
import {
  SanitizeHtmlPipeModule
} from '../../pipes/index';

import { TagSearchPageComponent } from './tag-search-page.component';

const routes: Routes = [
  {
    path: 'tag/:tag',
    component: TagSearchPageComponent,
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

    SanitizeHtmlPipeModule
  ],
  declarations: [

    TagSearchPageComponent
  ],
  providers: [
    TagGetService
  ]
})
export class TagSearchPageModule{ }
