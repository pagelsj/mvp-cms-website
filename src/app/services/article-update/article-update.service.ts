import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleUpdateService {

  constructor( private http: HttpClient ) { }

  public send(formData: any): Observable<any> {
    console.log('formData', formData);

    return this.http
      .put(`${environment.API_BASE_article}/internal-post/admin/`, formData)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }

  public sendExternal(formData: any): Observable<any> {
    console.log('formData', formData);

    return this.http
      .put(`${environment.API_BASE_article_external}/external-post/admin/`, formData)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }

}
