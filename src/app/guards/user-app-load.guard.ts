import {Injectable} from '@angular/core';
import {CanLoad, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAppLoadGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(): boolean {
    const user = JSON.parse(atob(sessionStorage.getItem('profile')));
    return !user.professional.position;
  }
}
