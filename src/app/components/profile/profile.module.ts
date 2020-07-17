import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';

import {
  SanitizeHtmlPipeModule
} from '../../pipes/index';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SanitizeHtmlPipeModule
  ],
  exports: [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule{ }
