import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  sideMenu = localStorage.getItem('menu') ? localStorage.getItem('menu') === 'o' : false;
  sideRight = false;

  constructor() {
  }

  openMenu() {
    this.sideMenu = !this.sideMenu;
    sessionStorage.setItem('menu', this.sideMenu ? 'o' : 'i');
  }

  closeMenu() {
    this.sideMenu = false;
    sessionStorage.setItem('menu', 'i');
  }

  openRight() {
    this.sideRight = !this.sideRight;
  }
}
