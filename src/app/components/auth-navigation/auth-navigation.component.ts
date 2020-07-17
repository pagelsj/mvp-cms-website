import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStateService } from '../authentication/index';

@Component({
  selector: 'app-auth-navigation',
  templateUrl: './auth-navigation.component.html',
  styleUrls: ['./auth-navigation.component.scss']
})
export class AuthNavigationComponent implements OnInit {
  public authenticated: boolean;

  constructor(
    private router: Router,
    private loginStateService: LoginStateService
  ) {
  }

  ngOnInit() {
	  // this.authenticated = sessionStorage['user_token'];
    this.loginStateService.state
      .subscribe(state => {
        this.authenticated = state;
      });

  }
	public authNavigation = [
		{
			label: 'Profile',
			link: '/auth/profile',
      icon: 'fa-address-card'
		},
    {
      label: 'Articles',
      link: '/auth/list-articles',
      icon: 'fa-book-open'
    },
    {
      label: 'Events',
      link: '/auth/list-events',
      icon: 'fa-calendar-alt'
    }
	];

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
