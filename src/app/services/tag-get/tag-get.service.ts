import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagGetService {

  constructor( private http: HttpClient ) { }

  public load(tag): Observable<any> {

    return this.http
      .get(`${environment.API_BASE_article}/internal-post/tag/` + tag)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }

  public loadExternal(tag): Observable<any> {

    return this.http
      .get(`${environment.API_BASE_article_external}/external-post/tag/` + tag)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
