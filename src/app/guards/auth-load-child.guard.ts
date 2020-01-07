import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanLoad, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadChildGuard implements CanLoad {
  constructor(private router: Router) {
  }

  canLoad(): boolean {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
