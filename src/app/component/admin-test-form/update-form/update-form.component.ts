import {Component, OnDestroy, OnInit} from '@angular/core';
import {TestChild} from '../../../interfaces/models/testChild.model';
import {Question} from '../../../interfaces/models/question';
import {Child} from '../../../interfaces/models/child.model';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionTestService} from '../../question-test/question-test.service';
import {DialogService} from '../../alerts/dialog.service';
import {ChildrenService} from '../../children/services/children.service';
import {Location} from '@angular/common';
import {SideNavService} from '../../../services/side-nav.service';
import {TestAcceptComponent} from '../../question-test/test-accept/test-accept.component';
import {TestSolvedResultComponent} from '../../question-test/test-solved-result/test-solved-result.component';
import {TestSolvedResourceComponent} from '../../question-test/test-solved-resource/test-solved-resource.component';
import {AdminFormFilesComponent} from '../admin-form-files/admin-form-files.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit, OnDestroy {

  title = 'Atras';
  testForm: TestSolved[] = [];
  hide = true;
  test: TestChild;
  // titleForm = 'Resolver Prubea';
  questions: Question[];
  // testId: number;
  // childSelect: Child;
  // childId: number;
  // defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private questionTestService: QuestionTestService,
              private dialog: MatDialog,
              private childService: ChildrenService,
              private location: Location,
              private sideNavService: SideNavService
              // @Inject(MAT_DIALOG_DATA) private data: any
  ) {
  }

  ngOnInit() {
    this.sideNavService.closeNav();
    // this.childService.get(this.childId).subscribe(r => {
    //   this.childSelect = r as Child;
    // });
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
        questionOption: null,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
  }

  accept() {
    this.dialog.open(TestAcceptComponent, {
      width: '300px',
    })
  }

  loadQuestion(id) {
    this.questionTestService.getCustom(`${id}/solved`).subscribe((res: Question[]) => {
      this.questions = res;
      this.generateGroupTest();
    });
  }

  closeTest() {
    // this.dialog.toastDialog('Cancelado');
    this.location.back();
  }

  openResource(option: Question) {
    this.dialog.open(AdminFormFilesComponent, {
      width: '536px',
      // height: 'auto',
      data: {
        question: option
      }
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
