import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {DialogService} from '../../alerts/dialog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildrenService} from '../services/children.service';
import {Child, GroupChildren} from '../../../interfaces/models/child.model';
import * as moment from 'moment';
import {ChildrenShowComponent} from '../childer-show/children-show.component';
import {QuestionTestService} from '../../question-test/question-test.service';
import {ChildTreatmentsComponent} from '../child-treatments/child-treatments.component';
import {ChildTreatmentTracingComponent} from '../child-treartment-tracing/child-treatment-tracing.component';
import {VERTICAL_POSITION} from '../../../../environments/environment';
import {PrintPdfService} from '../../../services/printPdf.service';
import {ChildrenDialogReportComponent} from '../children-dialog-report/children-dialog-report.component';
import {DEFAULT_PICTURE} from '../../../config/appearance.config';
import {SideNavService} from '../../../services/side-nav.service';
import {TestShowResultComponent} from '../../question-test/test-show-result/test-show-result.component';

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.scss']
})
export class ChildrenListComponent implements OnInit {

  title = 'Niños(as)';
  defaultPhoto = DEFAULT_PICTURE;
  now = moment();
  dataSource: Child[] = [];
  auxData = [];
  searchVisible = false;
  params = {
    page: 1,
    limit: null,
  };
  groupChildren: GroupChildren[] = [];
  group = false;
  lengthPages = 0;


  constructor(private childrenService: ChildrenService,
              private dialogService: DialogService,
              private printService: PrintPdfService,
              private snack: MatSnackBar,
              private routerActive: ActivatedRoute,
              private testService: QuestionTestService,
              private sideService: SideNavService,
              private router: Router) {
  }

  ngOnInit() {
    this.all();
    this.loadChildrenRange();
  }

  all() {
    this.childrenService.get().subscribe((t: Child[]) => {
      this.dataSource = t;
      this.auxData = t;
    }, error1 => {
      this.dialogService.toastDialog('error');
    });
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

  show(child: Child | any) {
    sessionStorage.setItem('child', JSON.stringify(child));
    this.dialogService.openDialog(ChildrenShowComponent, {
      width: '700px',
    }).subscribe(res => {
      if (res) {
        if (res.treatment) {
          this.show(res);
        }
        if (res.result) {
          this.showResult(res, child);
        }
      }
    });
  }

  createTest(child: Child | any) {
    this.snack.open('Seguro de Proceder?, es irreversible!', 'Aceptar', {
      duration: 5000,
      verticalPosition: VERTICAL_POSITION,
    }).onAction().subscribe(() => {
      this.router.navigate(['/admin/child/test'], {
        queryParams: {
          c: btoa(JSON.stringify(child.id))
        }
      });
    });
  }

  update(value: any) {
    sessionStorage.setItem('child', JSON.stringify(value));
    this.router.navigate([this.childrenService.route + '/edit']);
  }

  printFile(child: Child | any) {
    this.testService.getCustom(`testChild/${child.id}`).subscribe((r: any) => {
      console.log(r);
      this.printService.printInfoChild(child, child.professional, r);
    });
  }

  openTreatments(child: Child) {
    this.dialogService.openDialog(ChildTreatmentsComponent, {
      width: '700px',
      data: {
        child
      }
    }).subscribe(a => {
      if (a) {
        this.openTestTracing(a);
      }
    });
  }

  openTestTracing(dates) {
    this.dialogService.openDialog(ChildTreatmentTracingComponent, {
      width: '100%',
      height: '100%',
      data: {
        id: dates.testSelect.id,
        child: dates.child
      },
    }).subscribe(a => {
      this.show(a);
    });
  }

  report() {
    this.dialogService.openDialog(ChildrenDialogReportComponent, {
      width: '400px',
    }).subscribe(r => {
      console.log(r);
      if (r) {
        this.childrenService.getInPeriodSolved(r.dateIni, r. dateEnd).subscribe((s: any) => {
          this.dataSource = s;
        });
      }
    });
  }

  search() {
    this.searchVisible = true;
  }

  cancel() {
    this.searchVisible = false;
    this.all();
  }

  searchChildren(evt: any) {
    this.dataSource = this.auxData
      .filter(a => a.name.toLowerCase().includes(evt.toLowerCase()) || a.lastName.toLowerCase().includes(evt.toLowerCase()));
  }

  private loadChildrenRange() {
    this.childrenService.get(`classification/children`).subscribe((a: any) => {
      this.groupChildren = a;
    });
  }

  setViewGroup() {
    this.group = !this.group;
    if (this.sideService.sideMenu) {
      this.sideService.closeNav();
    } else {
      this.sideService.openNav();
    }
  }

  private showResult(a: any, child) {
    // sessionStorage.setItem('child', JSON.stringify(child));
    this.dialogService.openDialog(TestShowResultComponent, {
      width: '100%',
      height: '100%',
      data: {
        childId: a.child.id,
        testId: a.testSelect.id,
      }
    }).subscribe(res => {
      if (res === 'open') {
        this.show(child);
      }
    });
  }
}
