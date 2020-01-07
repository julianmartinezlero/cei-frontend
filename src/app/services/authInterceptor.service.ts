import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
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

    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          sessionStorage.clear();
          this.dialogService.toastDialog('noAuth');
          this.router.navigate(['/login']);
        } else if (err.status === 500) {
          this.dialogService.toastDialog('error');
        }
        return throwError(err);
      })
    );
  }
}
