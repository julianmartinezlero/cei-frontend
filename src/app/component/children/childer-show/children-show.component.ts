import {Component, Inject, OnInit} from '@angular/core';
import {Child} from '../../../interfaces/models/child.model';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TestChild} from '../../../interfaces/models/testChild.model';
import {QuestionTestService} from '../../question-test/question-test.service';
import {PrintPdfService} from '../../../services/printPdf.service';

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
  // child: Child;
  tests: TestChild[] = [];
  testSelect: TestChild;
  constructor(private router: Router,
              private dialogRef: MatDialogRef<ChildrenShowComponent>,
              private testService: QuestionTestService,
              private printService: PrintPdfService) {
  }

  cancel() {
    sessionStorage.removeItem('child');
    this.dialogRef.close();
    // this.router.navigate(['/child']);
  }

  ngOnInit() {
    this.testService.getCustom(`testChild/${this.childSelect.id}`).subscribe((r: any) => {
      this.tests = r;
      this.testSelect = this.tests.length > 0 ? this.tests[0] : null;
    });
  }

  setTest(test) {
    this.testSelect = test;
  }
  getClass() {
    if (this.testSelect) {
      return this.getRange(this.testSelect.totalValue);
    } else {
      return 'white';
    }
  }
  getRange(total) {
    if (total >= 0 && total <= 0.69) {
      return 'green';
    }
    if (total >= 0.70 && total <= 1.19) {
      return 'yellow';
    }
    if (total >= 1.20 && total <= 1.70) {
      return 'orange';
    }
    if (total >= 1.71 && total <= 3) {
      return 'red';
    }
  }
  isActive(test: TestChild) {
    if (this.testSelect) {
      return test.id === this.testSelect.id ? this.getClass() : '';
    } else {
      return '';
    }
  }

  showTreatment() {
    this.dialogRef.close({
      testSelect: this.testSelect,
      child: this.childSelect,
      treatment: true
    });
  }

  printDiacritics() {
    this.printService.printTestChild(this.testSelect.child, this.testSelect.child.professional, this.testSelect.treatmentChildren);
  }

  showResult() {
    this.dialogRef.close({
      testSelect: this.testSelect,
      child: this.childSelect,
      result: true,
    });
  }

  getText(total) {
    if (total >= 0 && total <= 0.69) {
      return 'Sin Riego';
    }
    if (total >= 0.70 && total <= 1.19) {
      return 'Riesgo Leve';
    }
    if (total >= 1.20 && total <= 1.70) {
      return 'Riesgo Medio';
    }
    if (total >= 1.71 && total <= 3) {
      return 'Riesgo Alto';
    }
  }
}
