import {
	Component,
  Output,
  EventEmitter
} from '@angular/core';
import {
	FormGroup,
	FormControl,
  Validators
} from '@angular/forms';

import { RegisterService } from './register.service';

import {
  EmailValidator,
  NameValidator
} from '../../../forms/index';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Output() username = new EventEmitter<string>();

  constructor(
    private registerService: RegisterService
  ) { }

  registerForm = new FormGroup({
    firstname: new FormControl('', [ Validators.required, NameValidator() ]),
    lastname: new FormControl('', [ Validators.required, NameValidator() ]),
    username: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required ]),
    confirmPassword: new FormControl('', [ Validators.required ])
  });

  onSubmit() {
    this.registerService.submitRegistration(this.registerForm.value)
      .subscribe(resp => {
        this.username.emit(resp.user.username);
      });
  }
};
