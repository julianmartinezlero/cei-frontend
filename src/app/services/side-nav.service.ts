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
    localStorage.setItem('menu', this.sideMenu ? 'o' : 'i');
  }

  openNav() {
    this.sideMenu = true;
    localStorage.setItem('menu', 'o');
  }

  closeNav() {
    this.sideMenu = false;
    localStorage.setItem('menu', 'i');
  }

  openRight() {
    this.sideRight = !this.sideRight;
  }
}
