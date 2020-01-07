import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {DialogService} from '../../alerts/dialog.service';
import {Router} from '@angular/router';
import {CrudComponent} from '../../../interfaces/crudComponent.interface';
import {ChildrenService} from '../services/children.service';
import {Child} from '../../../interfaces/models/child.model';
import * as moment from 'moment';
import {ChildrenShowComponent} from '../childer-show/children-show.component';

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.scss']
})
export class ChildrenListComponent implements OnInit, CrudComponent {

  displayedColumns: string[] = [
    'position',
    'name',
    'lastName',
    'birthDate',
    'ci',
    'age',
    'sex',
    'options'
  ];
  title = 'Niños(as)';
  defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';
  now = moment();
  dataSource = new MatTableDataSource<Child>([]);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private childrenService: ChildrenService,
              private dialogService: DialogService,
              private router: Router) {
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.childrenService.get().subscribe((t: Child[]) => {
      this.dataSource = new MatTableDataSource<Child>(t);
      this.dataSource.sort = this.sort;
    }, error1 => {
      this.dialogService.toastDialog('error');
    });
  }

  create() {
    this.router.navigate([this.childrenService.route + '/create']);
  }

  delete(ele: Child) {
    this.dialogService.deleteDialog(ele.name + ' ' + ele.lastName).subscribe(re => {
      if (re === 1) {
        this.childrenService.delete(ele.id).subscribe(del => {
          this.dialogService.toastDialog('delete');
          this.all();
        }, error1 => {
          this.dialogService.toastDialog('error');
        });
      }
    });
  }

  show(id) {
    sessionStorage.setItem('child', JSON.stringify(this.dataSource.data[id]));
    this.dialogService.openDialog(ChildrenShowComponent, {
      width: '700px',
    }).subscribe(res => {
      console.log(res);
    });
    // this.router.navigate([this.childrenService.route + '/show']);
  }

  update(value: any) {
    sessionStorage.setItem('child', JSON.stringify(value));
    this.router.navigate([this.childrenService.route + '/edit']);
  }

  getAge(date) {
    return this.now.diff(date, 'year');
  }
}
