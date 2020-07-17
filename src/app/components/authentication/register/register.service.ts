import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class RegisterService {
  
  constructor(private http: HttpClient) {}
  
  public submitRegistration(formData:any): Observable<any> {
    return this.http
      .post(`${environment.API_BASE}/register`, formData)
      .pipe(
        tap((response: Response) => response ),
        catchError((error: any) => throwError(error))
      )
  }
}
