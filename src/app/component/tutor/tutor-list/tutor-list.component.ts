import {Component, OnInit, ViewChild} from '@angular/core';
import {TutorService} from '../services/tutor.service';
import {Tutor} from '../../../interfaces/models/tutor.model';
import {MatSort, MatTableDataSource} from '@angular/material';
import {CrudComponent} from '../../../interfaces/crudComponent.interface';
import {Router} from '@angular/router';
import {DialogService} from '../../alerts/dialog.service';
import {TutorFormComponent} from '../tutor-form/tutor-form.component';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.scss']
})
export class TutorListComponent implements OnInit, CrudComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'lastName',
    'ci',
    'cell',
    'email',
    'options'
  ];
  title = 'Tutores';
  dataSource = new MatTableDataSource<Tutor>([]);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tutorService: TutorService,
              private dialogService: DialogService,
              private router: Router) {
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.tutorService.get().subscribe((t: Tutor[]) => {
      this.dataSource = new MatTableDataSource<Tutor>(t);
      this.dataSource.sort = this.sort;
    }, error1 => {
      this.dialogService.toastDialog('error');
    });
  }

  create() {
    // this.router.navigate([this.tutorService.route + '/create']);
    this.dialogService.openDialog(TutorFormComponent, {
      width: '600px',
      maxHeight: '600px'
    }).subscribe(res => {
      console.log(res);
    });
  }

  delete(ele: Tutor) {
    this.dialogService.deleteDialog(ele.name + ' ' + ele.lastName).subscribe(re => {
      if (re === 1) {
        this.tutorService.delete(ele.id).subscribe(del => {
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
    sessionStorage.setItem('tutor', JSON.stringify(value));
    this.router.navigate([this.tutorService.route + '/edit']);
  }
}
