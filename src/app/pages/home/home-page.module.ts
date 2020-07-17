import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  ArticleGetAllService,
  EventGetAllService
} from '../../services/index';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
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
  ],
  declarations: [
    HomePageComponent
  ],
  providers: [
    ArticleGetAllService,
    EventGetAllService
  ]
})
export class HomePageModule{ }
