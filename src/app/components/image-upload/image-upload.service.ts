import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class ImageUploadService {

  constructor( private http: HttpClient ) { }

  public uploadImage(formData:any): Observable<any> {
    return this.http
      .post(`${environment.API_BASE_imageUpload}/imageUpload`, formData)
      .pipe(
        tap((response: Response) => {
          console.log('response', response);
          return response;
        }),
        catchError((error: any) => throwError(error))
      )
  }
}
