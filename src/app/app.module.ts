import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JwtModule } from '@auth0/angular-jwt';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  HeaderComponent,
  FooterComponent,
  AuthNavigationComponent,
  UserNavigationComponent
} from './components/index';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function jwtGetter() {
  return sessionStorage.getItem("user_token")
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthNavigationComponent,
    UserNavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: jwtGetter
      }
    }),

    BsDatepickerModule.forRoot(),

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
