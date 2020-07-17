import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoEncodeService {

  constructor( private http: HttpClient ) { }

  public get(address) {
    return this.http
      .get(`${environment.GEO_ENCODING_API}` + address)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
