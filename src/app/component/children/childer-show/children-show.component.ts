import {Component, OnInit} from '@angular/core';
import {Child} from '../../../interfaces/models/child.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-children-show',
  templateUrl: './children-show.component.html',
  styleUrls: ['./children-show.component.scss']
})
export class ChildrenShowComponent implements OnInit {

  title = 'Atras';
  hide = true;
  stringChild = sessionStorage.getItem('child');
  titleForm = 'Detalles del Niño(a)';
  childSelect: Child = this.stringChild ? JSON.parse(this.stringChild) : {
    id: null,
    name: null,
    lastName: null,
    sex: null,
    tutor: null,
    birthDate: null,
    ci: null,
    photo: null
  };

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  cancel() {
    sessionStorage.removeItem('child');
    this.router.navigate(['/child']);
  }
}
