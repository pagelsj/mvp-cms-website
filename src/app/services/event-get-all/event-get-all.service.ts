import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventGetAllService {

  constructor( private http: HttpClient ) { }

  public load(isAdmin?): Observable<any> {
    const admin = (isAdmin) ? 'admin/':'';
    return this.http
      .get(`${environment.API_BASE_event}/events/${admin}`)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
