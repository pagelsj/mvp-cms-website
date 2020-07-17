import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { LoginStateService } from './login-state.service';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    LoginStateService
  ]
})
export class LoginModule{ }
