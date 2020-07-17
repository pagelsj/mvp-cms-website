import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AdviceAndLinksPageComponent } from './advice-and-links-page.component';

const routes: Routes = [
  {
    path: 'advice-and-links',
    component: AdviceAndLinksPageComponent,
    data: {
      pageTitle: ''
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [
  ],
  declarations: [
    AdviceAndLinksPageComponent
  ]
})
export class AdviceAndLinksPageModule{ }
