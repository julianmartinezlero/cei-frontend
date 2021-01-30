import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {DialogService} from '../component/alerts/dialog.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private dialogService: DialogService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = sessionStorage.getItem('token');
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        try {
          if (event.body.message && event.status >= 200 ) {
            this.dialogService.toastDialog(event.body.message, 'success');
          }
        } catch (e) {
          //
        }
      }
      return event;
    }), catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          sessionStorage.clear();
          this.dialogService.toastDialog('noAuth');
          this.router.navigate(['/login']);
        } else if (err.status >= 400 && err.status <= 500) {
          this.dialogService.toastDialog(err.error.message, 'error');
        } else if (err.status === 0) {
          this.dialogService.toastDialog('connection');
        }
        return throwError(err);
      })
    );
  }
}
