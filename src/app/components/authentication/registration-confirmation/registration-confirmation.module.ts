import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationConfirmationComponent } from './registration-confirmation.component';
import { RegistrationConfirmationService } from './registration-confirmation.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    RegistrationConfirmationComponent
  ],
  declarations: [
    RegistrationConfirmationComponent
  ],
  providers: [
    RegistrationConfirmationService
  ]
})
export class RegistrationConfirmationModule{ }
