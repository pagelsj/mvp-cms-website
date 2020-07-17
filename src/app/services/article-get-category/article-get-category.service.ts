import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleGetCategoryService {

  constructor( private http: HttpClient ) { }

  public load(category): Observable<any> {

    return this.http
      .get(`${environment.API_BASE_article}/internal-post/category/${category}`)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
  public loadExternal(category): Observable<any> {

    return this.http
      .get(`${environment.API_BASE_article_external}/external-post/category/${category}`)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
