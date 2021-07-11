import {Injectable} from '@angular/core';
import {CanLoad, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAdminLoadGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(): boolean {
    const user = JSON.parse(atob(sessionStorage.getItem('profile')));
    if (user.professional.position) {
      return true;
    } else {
      this.router.navigate(['app']);
      return false;
    }
  }
}
