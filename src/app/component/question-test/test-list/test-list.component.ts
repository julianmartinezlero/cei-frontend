import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {DialogService} from '../../alerts/dialog.service';
import {Router} from '@angular/router';
import {Test} from '../../../interfaces/models/test.model';
import {ViewTest} from '../../../interfaces/models/ViewTest';
import {QuestionTestService} from '../question-test.service';
import {TestFormComponent} from '../test-form/test-form.component';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'code',
    'name',
    'tutor',
    'date',
    'questionState',
    'result',
    'options'
  ];
  title = 'Pruebas';
  dataSource = new MatTableDataSource<ViewTest>([]);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private questionTestService: QuestionTestService,
              private dialogService: DialogService,
              private router: Router) {
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.questionTestService.get().subscribe((t: ViewTest[]) => {
      this.dataSource = new MatTableDataSource<ViewTest>(t);
      this.dataSource.sort = this.sort;
    }, error1 => {
      this.dialogService.toastDialog('error');
    });
  }

  create() {
    this.dialogService.openDialog(TestFormComponent, {
      width: '400px',
    }).subscribe(res => {
      this.all();
    });
  }

  delete(ele: Test) {
    this.dialogService.deleteDialog(ele.code + ' ' + ele.questionState).subscribe(re => {
      if (re === 1) {
        this.questionTestService.delete(ele.id).subscribe(del => {
          this.dialogService.toastDialog('delete');
          this.all();
        }, error1 => {
          this.dialogService.toastDialog('error');
        });
      }
    });
  }

  show(data) {
    sessionStorage.setItem('child', JSON.stringify(data));
    this.router.navigate([`admin${this.questionTestService.route}/show`]);
  }

  solved(data) {
    const d = this.dataSource.data[data];
    sessionStorage.setItem('test', JSON.stringify(d));
    this.router.navigate([`admin/${this.questionTestService.route}/${d.childId}/solved`]);
  }

  update(value: any) {
    sessionStorage.setItem('child', JSON.stringify(value));
    this.router.navigate([this.questionTestService.route + '/edit']);
  }
}
