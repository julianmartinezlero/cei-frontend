import {Component, OnInit} from '@angular/core';
import {Child} from '../../../interfaces/models/child.model';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-children-show',
  templateUrl: './children-show.component.html',
  styleUrls: ['./children-show.component.scss']
})
export class ChildrenShowComponent implements OnInit {
  defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';
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

  constructor(private router: Router, private dialogRef: MatDialogRef<ChildrenShowComponent>) {
  }

  ngOnInit() {

  }

  cancel() {
    sessionStorage.removeItem('child');
    this.dialogRef.close();
    // this.router.navigate(['/child']);
  }
}
