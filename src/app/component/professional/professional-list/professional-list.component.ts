import {Component, OnInit, ViewChild} from '@angular/core';
import {CrudComponent} from '../../../interfaces/crudComponent.interface';
import {MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {DialogService} from '../../alerts/dialog.service';
import {Router} from '@angular/router';
import {ProfessionalService} from '../services/professional.service';
import {Professional} from '../../../interfaces/models/professional.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ProfessionalFormComponent} from '../professional-form/professional-form.component';
import {TutorEditComponent} from '../../tutor/tutor-edit/tutor-edit.component';
import {VERTICAL_POSITION} from '../../../../environments/environment';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProfessionalListComponent implements OnInit, CrudComponent {
  title = 'Profesionales';
  dataSource = new MatTableDataSource<Professional>([]);

  constructor(
    private professionalService: ProfessionalService,
    private dialogService: DialogService,
    private snack: MatSnackBar,
    private router: Router) {
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.professionalService.get().subscribe((t: Professional[]) => {
      this.dataSource = new MatTableDataSource<Professional>(t);
    });
  }

  create() {
    this.dialogService.openDialog(ProfessionalFormComponent, {
      width: '400px',
      data: {
        disabled: false,
        title: 'Registrar Profesional'
      }
    }).subscribe(res => {
      if (res) {
        this.ngOnInit();
      }
    });
  }

  delete(ele: Professional) {
    this.snack.open('Seguro de Eliminar?', 'Aceptar', {
      duration: 5000,
      verticalPosition: VERTICAL_POSITION,
    }).onAction().subscribe(() => {
      this.professionalService.delete(ele.id).subscribe(del => {
        this.all();
      });
    });
  }

  show(professional: any) {
    this.dialogService.openDialog(ProfessionalFormComponent, {
      width: '400px',
      data: {
        professional,
        disabled: true,
        title: 'Datos del Profesional'
      }
    }).subscribe(r => {
      if (r) {
        this.ngOnInit();
      }
    });
  }

  update(value: any) {
    this.dialogService.openDialog(ProfessionalFormComponent, {
      width: '400px',
      data: {
        professional: value,
        disabled: false,
        title: 'Actualizar Profesional'
      }
    }).subscribe(r => {
      if (r) {
        this.ngOnInit();
      }
    });
  }

}
