import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class ProfileService {

  constructor( private http: HttpClient ) { }

  public load(userId): Observable<any> {
    return this.http
      .get(`${environment.API_BASE_profile}/user-profile/` + userId)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
