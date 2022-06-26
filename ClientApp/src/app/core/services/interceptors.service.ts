import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { catchError, delay, filter, first, flatMap, from, map, mergeMap, Observable, of, retryWhen, take, tap, throwError } from 'rxjs';
import * as _stores from '@share/stores';
import * as _shareSvc from '@share/services';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private readonly userStore: _stores.UserStore) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
  }
}
