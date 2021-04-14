import {Component, OnInit} from '@angular/core';
import {Child} from '../../../interfaces/models/child.model';
import {ChildrenService} from '../../children/services/children.service';
import {DialogService} from '../../alerts/dialog.service';
import {ChildrenFormComponent} from '../../children/children-form/children-form.component';
import {ChildrenShowComponent} from '../../children/childer-show/children-show.component';
import {ChildTreatmentsComponent} from '../../children/child-treatments/child-treatments.component';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ChildTreatmentTracingComponent} from '../../children/child-treartment-tracing/child-treatment-tracing.component';

@Component({
  selector: 'app-user-children',
  templateUrl: './user-children.component.html',
  styleUrls: ['./user-children.component.scss']
})
export class UserChildrenComponent implements OnInit {
  children: Child[] = [];
  defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';

  constructor(private childService: ChildrenService,
              private snack: MatSnackBar,
              private router: Router,
              private location: Location,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.childService.getCustom(`ofTutor/all`).subscribe((res: Child[]) => {
      this.children = res;
    });
  }

  addChild() {
    this.dialogService.openDialog(ChildrenFormComponent, {
      width: '600px',
      data: {
        tutor: {},
      }
    }).subscribe(res => {
      if (res === true) {
        this.ngOnInit();
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
    // this.router.navigate([this.childrenService.route + '/show']);
  }

  createTest(child: Child) {
    this.snack.open('Seguro de Proceder?, es irreversible!', 'Aceptar', {
      duration: 5000,
    }).onAction().subscribe(() => {
      this.router.navigate(['/app/children/test'], {
        queryParams: {
          c: btoa(JSON.stringify(child.id))
        }
      });
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
}
