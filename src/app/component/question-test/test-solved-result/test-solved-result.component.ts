import {Component, OnInit} from '@angular/core';
import {Child} from '../../../interfaces/models/child.model';
import {TreatmentService} from '../treatment.service';
import {Test} from '../../../interfaces/models/test.model';

@Component({
  selector: 'app-test-solved-result',
  templateUrl: './test-solved-result.component.html',
  styleUrls: ['./test-solved-result.component.scss']
})
export class TestSolvedResultComponent implements OnInit {
  childSelect: Child = null;
  test: Test = null;
  treatment: any;

  constructor(private treatmentService: TreatmentService) {
  }

  ngOnInit() {
    this.test = JSON.parse(sessionStorage.getItem('test'));
    this.childSelect = JSON.parse(sessionStorage.getItem('child'));
    this.loadTreatment(this.getRange(this.test.totalValue));
  }

  loadTreatment(range) {
    this.treatmentService.get(range).subscribe(res => {
      this.treatment = res;
    });
  }

  getRange(total) {
    if (total >= 0 && total <= 0.69) {
      return 0;
    }
    if (total >= 0.70 && total <= 1.19) {
      return 1;
    }
    if (total >= 1.20 && total <= 1.70) {
      return 2;
    }
    if (total >= 1.71 && total <= 3) {
      return 3;
    }
  }

}
