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
    {name: 'Inicio', icon: 'home', route: '/admin/home'},
    {name: 'Tutores', icon: 'account_box', route: '/admin/tutor'},
    {name: 'Niños(as)', icon: 'child_care', route: '/admin/child'},
    {name: 'Profesionales', icon: 'assignment_ind', route: '/admin/professional'},
    {name: 'Pruebas', icon: 'assignment', route: '/admin/question-test'},
    {name: 'Usuarios', icon: 'verified_user', route: '/admin/user'}
  ];

  constructor(public sideService: SideNavService, private router: Router) {
  }

  ngOnInit() {

  }

  logout() {
    this.router.navigate(['/login']);
  }
}
