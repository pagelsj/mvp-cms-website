import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleDeleteService {
  public imageObj = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor( private http: HttpClient ) { }

  public delete(articleId, imageUrl?): Observable<any> {
    if (imageUrl) {
      this.imageObj['body'] = {
        'image': imageUrl
      };

      this.http
        .delete(`${environment.API_BASE_imageUpload}/imageUpload/`, this.imageObj)
        .pipe(
          tap((response: Response) => {
            return response;
          }),
          catchError((error: any) => throwError(error))
        ).subscribe(() => {});
    }

    return this.http
      .delete(`${environment.API_BASE_article}/internal-post/admin/` + articleId)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
  public deleteExternal(articleId, imageUrl?): Observable<any> {
    if (imageUrl) {
      this.imageObj['body'] = {
        'image': imageUrl
      };

      this.http
        .delete(`${environment.API_BASE_imageUpload}/imageUpload/`, this.imageObj)
        .pipe(
          tap((response: Response) => {
            return response;
          }),
          catchError((error: any) => throwError(error))
        ).subscribe(() => {});
    }
    return this.http
      .delete(`${environment.API_BASE_article_external}/external-post/admin/` + articleId)
      .pipe(
        tap((response: Response) => {
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
