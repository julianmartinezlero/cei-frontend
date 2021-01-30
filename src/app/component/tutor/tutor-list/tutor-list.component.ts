import {Component, OnInit} from '@angular/core';
import {TutorService} from '../services/tutor.service';
import {Tutor} from '../../../interfaces/models/tutor.model';
import {MatSnackBar} from '@angular/material';
import {CrudComponent} from '../../../interfaces/crudComponent.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '../../alerts/dialog.service';
import {TutorFormComponent} from '../tutor-form/tutor-form.component';
import {ChildrenFormComponent} from '../../children/children-form/children-form.component';
import {ChildrenService} from '../../children/services/children.service';
import {TutorChildComponent} from '../tutor-child/tutor-child.component';
import {TutorEditComponent} from '../tutor-edit/tutor-edit.component';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.scss']
})
export class TutorListComponent implements OnInit, CrudComponent {
  title = 'Tutores';
  state = true;
  tutors: Tutor[] = [];

  constructor(private tutorService: TutorService,
              private childService: ChildrenService,
              private dialogService: DialogService,
              private router: Router,
              private snack: MatSnackBar,
              private routerActive: ActivatedRoute) {
    this.routerActive.queryParams.subscribe(r => {
      this.state = r.sort;
    });
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.tutorService.get().subscribe((t: Tutor[]) => {
      this.tutors = t;
    }, error1 => {
      this.dialogService.toastDialog('error');
    });
  }

  create() {
    this.dialogService.openDialog(TutorFormComponent, {
      width: '500px',
    }).subscribe(res => {
      if (res) {
        this.ngOnInit();
      }
    });
  }

  delete(ele: Tutor) {
    this.snack.open('Seguro de Eliminar?', 'Aceptar', {
      duration: 5000,
    }).onAction().subscribe(() => {
      this.tutorService.delete(ele.id).subscribe(s => {
        this.all();
      });
    });
  }

  show(tutor: Tutor) {
    this.dialogService.openDialog(TutorEditComponent, {
      width: '500px',
      data: {
        tutor,
        disabled: true,
        title: 'Datos del Tutor'
      }
    });
  }

  createChild(tutor: Tutor) {
    this.dialogService.openDialog(ChildrenFormComponent, {
      width: '600px',
      data: {
        tutor,
        professionalId: tutor.id,
      },
    }).subscribe(r => {});
  }

  update(tutor: Tutor) {
    this.dialogService.openDialog(TutorEditComponent, {
      width: '500px',
      data: {
        tutor,
        disabled: false,
        title: 'Actualizar Tutor'
      }
    }).subscribe(r => {
      if (r) {
        this.ngOnInit();
      }
    });
  }

  tutorChildren(tutor: Tutor) {
    this.dialogService.openDialog(TutorChildComponent, {
      width: '500px',
      data: {
        tutor,
      },
    });
  }
}
