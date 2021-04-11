import {Component, Inject, OnInit} from '@angular/core';
import {TreatmentService} from '../treatment.service';
import {TestChild} from '../../../interfaces/models/testChild.model';
import {MAT_DIALOG_DATA} from '@angular/material';
import {QuestionTestService} from '../question-test.service';

@Component({
  selector: 'app-test-solved-result',
  templateUrl: './test-solved-result.component.html',
  styleUrls: ['./test-solved-result.component.scss']
})
export class TestSolvedResultComponent implements OnInit {
  test: TestChild = null;
  treatment: any;

  constructor(private treatmentService: TreatmentService,
              private testService: QuestionTestService,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.test = this.data.testResult;
  }

  ngOnInit() {

  }

  getClass() {
    if (this.test) {
      return this.getRange(this.test.totalValue);
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

}
