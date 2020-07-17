import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CalendarPageComponent } from './calendar-page.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarPageComponent,
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
    CalendarPageComponent
  ]
})
export class CalendarPageModule{ }
