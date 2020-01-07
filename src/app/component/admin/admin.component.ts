import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  routes = [
    {name: 'Inicio', icon: 'home', route: '/admin/home'},
    {name: 'Tutores', icon: 'account_box', route: '/admin/tutor'},
    {name: 'Niños(as)', icon: 'child_care', route: '/admin/child'},
    {name: 'Profesionales', icon: 'assignment_ind', route: '/admin/professional'},
    {name: 'Pruebas', icon: 'assignment', route: '/admin/question-test'},
    {name: 'Usuarios', icon: 'verified_user', route: '/admin/user'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
