import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    RegisterService
  ]
})
export class RegisterModule{ }
