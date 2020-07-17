import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleGetService {

  constructor( private http: HttpClient ) { }

  public load(articleTitle): Observable<any> {

    return this.http
      .get(`${environment.API_BASE_article}/internal-post/` + articleTitle)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
  public loadExternal(articleTitle): Observable<any> {

    return this.http
      .get(`${environment.API_BASE_article_external}/external-post/` + articleTitle)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
