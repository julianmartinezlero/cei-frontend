import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Child} from '../../../interfaces/models/child.model';
import {QuestionTestService} from '../../question-test/question-test.service';
import {TestChild} from '../../../interfaces/models/testChild.model';

@Component({
  selector: 'app-child-treatments',
  templateUrl: './child-treatments.component.html',
  styleUrls: ['./child-treatments.component.scss']
})
export class ChildTreatmentsComponent implements OnInit {
  child: Child;
  tests: TestChild[] = [];
  testSelect: TestChild;
  constructor(
    private testService: QuestionTestService,
    private dialogRef: MatDialogRef<ChildTreatmentsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {
    this.child = this.data.child;
  }

  ngOnInit() {
    this.testService.getCustom(`testChild/${this.child.id}`).subscribe((r: any) => {
      this.tests = r;
      this.testSelect = this.tests.length > 0 ? this.tests[this.tests.length - 1] : null;
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
    this.dialogRef.close(this.testSelect);
  }
}
