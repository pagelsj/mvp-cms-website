import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad {

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  canLoad( route: Route ): Observable<boolean> | Promise<boolean> | boolean {

    const token = this.jwtHelper.tokenGetter();

    if(!this.jwtHelper.isTokenExpired()) {
      return true;
    };

    this.router.navigate(['login'])
  }

}
