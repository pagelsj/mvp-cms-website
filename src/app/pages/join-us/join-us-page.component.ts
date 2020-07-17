import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

const uuid = require('uuid');

@Component({
  selector: 'app-join-us-page',
  templateUrl: './join-us-page.component.html',
  styleUrls: ['./join-us-page.component.scss']
})
export class JoinUsPageComponent {

  constructor(
    private fb: FormBuilder
  ) { }

  public joinUsForm = new FormGroup({
    firstname: new FormControl('', [ Validators.required ]),
    lastname: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required ]),
    mobile: new FormControl('', [ Validators.required ]),
    occupation: new FormControl('', [ Validators.required ]),
    occupationOther: new FormControl(''),
    support: new FormControl('', [ Validators.required ]),
    succeeding: new FormControl('', [ Validators.required ]),
    online: new FormControl('', [ Validators.required ])
  });

  public occupationTypes = [
    'Student',
    'professional',
    'I’m figuring out my next move',
    'Starting a business',
    "Other"
  ];
  public supportTypes = [
    'Professional',
    'Health & wellbeing',
    'Personal dev',
    'Mental health',
    'Happy relationships'
  ];
  public succeedingTypes = [
    'Professional',
    'Health & wellbeing',
    'Personal dev',
    'Mental health',
    'Happy relationships'
  ];

  onSubmit() {

    console.log('this.joinUsForm.value', this.joinUsForm.value);

    // this.articlePostService.send(this.joinUsForm.value)
    //   .subscribe(resp => {
    //     alert('New article added!');
    //   });
  }
}
