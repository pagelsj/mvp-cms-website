import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem('user_token');

    const googleMap = (request.url.indexOf(environment.GEO_ENCODING_API) >= 0) ? true : false;

    if(token && !googleMap) {
      request = request.clone({
        setHeaders: {
          'Authorization': token
        }
      });
    }

    return next.handle(request);

  }
};
