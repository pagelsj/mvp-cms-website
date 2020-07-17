import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventDeleteService {

  constructor( private http: HttpClient ) { }

  public delete(eventId): Observable<any> {

    return this.http
      .delete(`${environment.API_BASE_event}/events/admin/` + eventId)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
