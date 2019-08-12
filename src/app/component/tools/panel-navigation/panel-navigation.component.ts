import {Component, OnInit} from '@angular/core';
import {SideNavService} from '../../../services/side-nav.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-panel-navigation',
  templateUrl: './panel-navigation.component.html',
  styleUrls: ['./panel-navigation.component.scss']
})
export class PanelNavigationComponent implements OnInit {
  // user: User;
  // items = [];
  private routes = [
    {name: 'Inicio', icon: 'home', route: '/home'},
    {name: 'Tutores', icon: 'account_box', route: '/tutor'},
    {name: 'Niños(as)', icon: 'child_care', route: '/child'},
    {name: 'Profesionales', icon: 'assignment_ind', route: '/professional'},
    {name: 'Usuarios', icon: 'verified_user', route: '/user'}
  ];

  constructor(public sideService: SideNavService, private router: Router) {
  }

  ngOnInit() {

  }

  logout() {
    this.router.navigate(['/login']);
  }
}
