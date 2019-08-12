import {Component, OnInit, ViewChild} from '@angular/core';
import {CrudComponent} from '../../../interfaces/crudComponent.interface';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Tutor} from '../../../interfaces/models/tutor.model';
import {DialogService} from '../../alerts/dialog.service';
import {Router} from '@angular/router';
import {ProfessionalService} from '../services/professional.service';
import {Professional} from '../../../interfaces/models/professional.model';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss']
})
export class ProfessionalListComponent implements OnInit, CrudComponent {
  displayedColumns: string[] = [
    'pos',
    'name',
    'lastName',
    'ci',
    'cell',
    'email',
    'position',
    'profession',
    'options'
  ];

  title = 'Profesionales';
  dataSource = new MatTableDataSource<Professional>([]);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private professionalService: ProfessionalService,
    private dialogService: DialogService,
    private router: Router) {
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.professionalService.get().subscribe((t: Professional[]) => {
      this.dataSource = new MatTableDataSource<Professional>(t);
      this.dataSource.sort = this.sort;
    }, error1 => {
      this.dialogService.toastDialog('error');
    });
  }

  create() {
    this.router.navigate([this.professionalService.route + '/create']);
  }

  delete(ele: Professional) {
    this.dialogService.deleteDialog(ele.name + ' ' + ele.lastName).subscribe(re => {
      if (re === 1) {
        this.professionalService.delete(ele.id).subscribe(del => {
          this.dialogService.toastDialog('delete');
          this.all();
        }, error1 => {
          this.dialogService.toastDialog('error');
        });
      }
    });
  }

  show(id: any) {
  }

  update(value: any) {
    sessionStorage.setItem('professional', JSON.stringify(value));
    this.router.navigate([this.professionalService.route + '/edit']);
  }
}
