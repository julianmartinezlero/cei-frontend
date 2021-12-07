import {Component, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {QuestionTestService} from '../../question-test/question-test.service';
import {TestResolved} from '../../question-test/test-show-result/test-show-result.component';

@Component({
  selector: 'app-children-report',
  templateUrl: './children-report.component.html',
  styleUrls: ['./children-report.component.scss']
})
export class ChildrenReportComponent implements OnInit {
  @Input() childId: number;
  tests: TestResolved[];
  questions: any[];
  constructor(private testService: QuestionTestService) { }

  ngOnInit() {
    this.testService.get(`${this.childId}/allResolved`).subscribe((a: any) => {
      this.tests = a;
      this.maxLengthTest(this.tests);
      console.log(this.questions);
    });
  }

  maxLengthTest(tests: TestResolved[]) {
    if (tests.length > 0) {
      const questions = tests[0].testResults.map(a => a.question);
      for (const question of questions) {
        question.result = tests.map(a => a.testResults.find(b => b.question.id === question.id).questionOption.value);
      }
      this.questions = questions;
    }
  }
}

@Directive({
  selector: '[appColorRange]'
})
export class ColorRangeDirective implements OnChanges {
  @Input() appColorRange: number;
  constructor(private ref: ElementRef) {}

  getRange(total) {
    if (total === 0) {
      return '#baffba';
    }
    if (total === 1) {
      return '#ffffc8';
    }
    if (total  === 2) {
      return '#ffda97';
    }
    if (total === 3) {
      return '#ffc9c9';
    }
  }

  getRangeBorder(total) {
    if (total === 0) {
      return '1px solid #86d386';
    }
    if (total === 1) {
      return'solid 1px #d9d94d';
    }
    if (total  === 2) {
      return '1px solid rgb(231 168 54)';
    }
    if (total === 3) {
      return '1px solid rgb(255 140 140)';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ref.nativeElement.style.backgroundColor = this.getRange(this.appColorRange);
    this.ref.nativeElement.style.border = this.getRangeBorder(this.appColorRange);
  }
}


