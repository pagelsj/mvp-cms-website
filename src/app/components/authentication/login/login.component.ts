import {
	Component
} from '@angular/core';
import {
	FormGroup,
	FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

// import {
//   NameValidator
// } from '../../../forms/index';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  loginForm = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required ])
  });

  onSubmit() {
  	this.loginService.submitLogin(this.loginForm.value)
      .subscribe(resp => {
        sessionStorage.setItem("user_token", resp.accessToken);
        sessionStorage.setItem("user_name", resp.name);
        sessionStorage.setItem("user_lastname", resp.lastname);
        sessionStorage.setItem("user_email", resp.email);
        sessionStorage.setItem("client_id", resp.client_id);
        sessionStorage.setItem("user_email", this.loginForm.get('username').value);

        this.router.navigate(['']);
      });
  }
};
