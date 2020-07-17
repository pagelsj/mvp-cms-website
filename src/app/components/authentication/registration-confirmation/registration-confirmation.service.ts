import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class RegistrationConfirmationService {
  
  constructor(private http: HttpClient) {}
  
  public submitConfirmation(formData:any): Observable<any> {
    return this.http
      .post(`${environment.API_BASE}/confirm`, formData)
      .pipe(
        tap((response: Response) => response ),
        catchError((error: any) => throwError(error))
      )
  }
}
