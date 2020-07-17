import {
	Component,
  Input,
  OnInit
} from '@angular/core';
import {
	FormGroup,
	FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationConfirmationService } from './registration-confirmation.service';

@Component({
  selector: 'registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.scss']
})
export class RegistrationConfirmationComponent implements OnInit {
  @Input() username: any;

  constructor(
    private router: Router,
    private confirmationService: RegistrationConfirmationService
  ) { }

  ngOnInit () {
    if(this.username){
      this.confirmationForm.patchValue({
        username: this.username
      });
    }
  }

  confirmationForm = new FormGroup({
    username: new FormControl('', [ Validators.required ]),
    pin: new FormControl('', [ Validators.required ])
  });

  onSubmit() {
    let payload = this.confirmationForm.value;

  	this.confirmationService.submitConfirmation(payload)
      .subscribe(resp => {
        this.router.navigate(['']);
      });
  }
};
