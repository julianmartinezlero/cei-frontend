import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionTestService} from '../question-test.service';
import {DialogService} from '../../alerts/dialog.service';
import {Question} from '../../../interfaces/models/question';
import {Child} from '../../../interfaces/models/child.model';
import {TestSolvedResourceComponent} from '../test-solved-resource/test-solved-resource.component';
import {TestAcceptComponent} from '../test-accept/test-accept.component';
import {TestChild} from '../../../interfaces/models/testChild.model';
import {Location} from '@angular/common';
import {TestSolvedResultComponent} from '../test-solved-result/test-solved-result.component';
import {ChildrenService} from '../../children/services/children.service';
import {SideNavService} from '../../../services/side-nav.service';
import {TestUploadResourceComponent} from '../test-upload-resource/test-upload-resource.component';

@Component({
  selector: 'app-test-solved',
  templateUrl: './test-solved.component.html',
  styleUrls: ['./test-solved.component.scss']
})
export class TestSolvedComponent implements OnInit, OnDestroy {

  title = 'Atras';
  testForm: TestSolved[] = [];
  hide = true;
  test: TestChild;
  titleForm = 'Resolver Prubea';
  questions: Question[];
  testId: number;
  childSelect: Child;
  childId: number;
  defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private questionTestService: QuestionTestService,
              private dialogService: DialogService,
              private childService: ChildrenService,
              private location: Location,
              private sideNavService: SideNavService
              // @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.activatedRoute.queryParams.subscribe(data => {
      this.childId = JSON.parse(atob(data.c));
    });
  }

  ngOnInit() {
    this.sideNavService.closeNav();
    this.childService.get(this.childId).subscribe(r => {
      this.childSelect = r as Child;
    });
    this.loadQuestion(null);
  }

  ngOnDestroy(): void {
    this.sideNavService.openNav();
  }

  generateGroupTest() {
    this.questions.forEach(r => {
      this.testForm.push({
        id: null,
        questionId: r,
        test: null,
        resourceUrl: null,
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
        this.questionTestService.postCustom('solved/save', {
          solution: this.testForm,
          child: this.childSelect,
          totalValue: total
        }).subscribe((r: any) => {
          this.location.back();
          this.test = r.test;
          this.dialogService.openDialog(TestSolvedResultComponent, {
            width: '700px',
            height: '505px',
            data: {
              testResult: r.testResult,
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
    this.dialogService.toastDialog('Cancelado');
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

  uploadResource(testSolved: TestSolved) {
    this.dialogService.openDialog(TestUploadResourceComponent, {
      width: '500px',
      height: '500px',
      data:  testSolved,
    }).subscribe(r => {
      if (r) {
        testSolved.resourceUrl = r;
      }
    });
  }
}

export interface TestSolved {
  id: number;
  questionId: any;
  test: any;
  questionOption: any;
  resourceUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
