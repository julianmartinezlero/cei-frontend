import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionTestService} from '../question-test.service';
import {DialogService} from '../../alerts/dialog.service';
import {Question} from '../../../interfaces/models/question';
import {Child} from '../../../interfaces/models/child.model';
import {TestSolvedResourceComponent} from '../test-solved-resource/test-solved-resource.component';
import {TestAcceptComponent} from '../test-accept/test-accept.component';
import {Test} from '../../../interfaces/models/test.model';
import {Location} from '@angular/common';
import {TestSolvedResultComponent} from '../test-solved-result/test-solved-result.component';

@Component({
  selector: 'app-test-solved',
  templateUrl: './test-solved.component.html',
  styleUrls: ['./test-solved.component.scss']
})
export class TestSolvedComponent implements OnInit {

  title = 'Atras';
  testForm: TestSolved[] = [];
  hide = true;
  test: Test;
  titleForm = 'Resolver Prubea';
  questions: Question[];
  testId: number;
  childSelect: Child;
  defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private questionTestService: QuestionTestService,
              private dialogService: DialogService,
              private location: Location
              // @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.activatedRoute.params.subscribe(data => {
      this.testId = data.id;
    });
  }

  ngOnInit() {
    this.questionTestService.get(this.testId).subscribe((r: any) => {
      this.test = r;
      this.childSelect = this.test.child;
    });
    this.loadQuestion(null);
  }

  generateGroupTest() {
    this.questions.forEach(r => {
      this.testForm.push({
        id: null,
        questionId: r,
        test: null,
        questionOption: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
  }

  accept() {
    this.dialogService.openDialog(TestAcceptComponent, {
      width: '300px',
    }).subscribe(accept => {
      if (accept === true) {
        let total = 0;
        this.testForm.forEach(q => {
          total += q.questionOption.value;
        });
        total = total / 12;
        this.testForm.forEach(q => {
          q.test = this.test;
        });
        this.questionTestService.postCustom('solved/save', {
          solution: this.testForm,
          totalValue: total,
          test: this.test
        }).subscribe(r => {
          this.dialogService.toastDialog('success');
          this.location.back();
          this.dialogService.openDialog(TestSolvedResultComponent, {
            width: '700px',
            height: '505px',
            data: {
              test: this.test
            }
          });
        });
      }
    });
  }

  loadQuestion(id) {
    this.questionTestService.getCustom(`${id}/solved`).subscribe((res: Question[]) => {
      this.questions = res;
      this.generateGroupTest();
    });
  }

  closeTest() {
    this.dialogService.toastDialog('cancel');
    this.location.back();
  }

  openResource(option: Question) {
    this.dialogService.openDialog(TestSolvedResourceComponent, {
      width: '1000px',
      height: '427px',
      data: {
        question: option
      }
    }).subscribe(r => {
      console.log(r);
    });
  }

  testValid() {
    return this.testForm.filter(r => {
      return r.questionOption;
    }).length === 12;
  }
}

export interface TestSolved {
  id: number;
  questionId: any;
  test: any;
  questionOption: any;
  createdAt: Date;
  updatedAt: Date;
}
