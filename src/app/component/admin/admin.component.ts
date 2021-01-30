import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  routes = [
    {name: 'Inicio', icon: 'home', route: '/admin/home'},
    {name: 'Tutores', icon: 'account_box', route: '/admin/tutor/index'},
    {name: 'Niños(as)', icon: 'child_care', route: '/admin/child/index'},
    {name: 'Profesionales', icon: 'assignment_ind', route: '/admin/professional/index'},
    // {name: 'Pruebas', icon: 'assignment', route: '/admin/question-test/index'},
    // {name: 'Usuarios', icon: 'verified_user', route: '/admin/user/index'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
