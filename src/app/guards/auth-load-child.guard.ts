import {Injectable} from '@angular/core';
import {CanLoad, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadChildGuard implements CanLoad {
  constructor(private router: Router) {
  }

  canLoad(): boolean {
    if (sessionStorage.getItem('token')) {
      const user = JSON.parse(atob(sessionStorage.getItem('profile')));
      if (user.professional.position) {
        this.router.navigate(['admin', 'home']);
      } else {
        this.router.navigate(['app']);
      }
      return false;
    } else {
      // this.router.navigate(['/login']);
      return true;
    }
  }
}
