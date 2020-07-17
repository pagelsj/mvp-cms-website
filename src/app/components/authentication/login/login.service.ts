import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { LoginStateService } from './login-state.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private loginStateService: LoginStateService
  ) { }

  public submitLogin(formData:any): Observable<any> {
    return this.http
      .post(`${environment.API_BASE}/login`, formData)
      .pipe(
        tap((response: Response) => {
          this.loginStateService.setStatus(true);

          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
