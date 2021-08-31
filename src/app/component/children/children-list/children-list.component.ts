import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {DialogService} from '../../alerts/dialog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ChildrenService} from '../services/children.service';
import {Child} from '../../../interfaces/models/child.model';
import * as moment from 'moment';
import {ChildrenShowComponent} from '../childer-show/children-show.component';
import {QuestionTestService} from '../../question-test/question-test.service';
import {ChildTreatmentsComponent} from '../child-treatments/child-treatments.component';
import {ChildTreatmentTracingComponent} from '../child-treartment-tracing/child-treatment-tracing.component';
import {VERTICAL_POSITION} from '../../../../environments/environment';
import {PrintPdfService} from '../../../services/printPdf.service';
import {ChildrenDialogReportComponent} from '../children-dialog-report/children-dialog-report.component';

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.scss']
})
export class ChildrenListComponent implements OnInit {

  title = 'Niños(as)';
  defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';
  now = moment();
  dataSource: Child[] = [];
  auxData = [];
  searchVisible = false;
  params = {
    page: 1,
    limit: null,
  };
  lengthPages = 0;


  constructor(private childrenService: ChildrenService,
              private dialogService: DialogService,
              private printService: PrintPdfService,
              private snack: MatSnackBar,
              private routerActive: ActivatedRoute,
              private testService: QuestionTestService,
              private router: Router) {
  }

  ngOnInit() {
    this.all();
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

  show(child: Child) {
    sessionStorage.setItem('child', JSON.stringify(child));
    this.dialogService.openDialog(ChildrenShowComponent, {
      width: '700px',
    }).subscribe(res => {
      console.log(res);
    });
  }

  createTest(child: Child) {
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

  printFile(child: Child) {
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
      this.openTreatments(a);
    });
  }

  // archive(child: Child) {
  //   this.snack.open('Seguro de Archivar?', 'Aceptar', {
  //     duration: 5000,
  //   }).onAction().subscribe(() => {
  //     child.isActive = false;
  //     this.childrenService.put(child.id, child).subscribe(() => {
  //       this.ngOnInit();
  //     });
  //   });
  // }

  report() {
    this.dialogService.openDialog(ChildrenDialogReportComponent, {
      width: '400px',
    }).subscribe(r => {
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
}
