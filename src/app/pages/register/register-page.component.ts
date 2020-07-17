import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
	userCreated: string;
  registered: boolean;

  constructor (
    private route: ActivatedRoute
  ) {
    this.route
      .data
      .subscribe(routeData => {
        this.registered = routeData.registered;
      });
  }

  ngOnInit(){
  }

  confirmUser($event) {
  	this.userCreated = $event;
  }

}
