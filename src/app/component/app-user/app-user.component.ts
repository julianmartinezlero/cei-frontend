import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit {
  routes = [
    {name: 'Inicio', icon: 'home', route: '/app'},
    {name: 'Perfil', icon: 'accessibility', route: '/app'},
    {name: 'Mis hijos', icon: 'child_care', route: '/app/children'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
