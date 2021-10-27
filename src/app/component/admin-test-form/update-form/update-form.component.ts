import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {TestChild} from '../../../interfaces/models/testChild.model';
import {Question} from '../../../interfaces/models/question';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionTestService} from '../../question-test/question-test.service';
import {ChildrenService} from '../../children/services/children.service';
import {Location} from '@angular/common';
import {SideNavService} from '../../../services/side-nav.service';
import {AdminFormFilesComponent} from '../admin-form-files/admin-form-files.component';
import {MatDialog, MatSnackBar} from '@angular/material';

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
  questions: Question[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private questionTestService: QuestionTestService,
              private dialog: MatDialog,
              private childService: ChildrenService,
              private location: Location,
              private sideNavService: SideNavService,
              private snack: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.closeNav().then(a => {
      setTimeout(() => {
        this.loadQuestion(null);
      }, 200);
    });
  }

  async closeNav() {
    this.sideNavService.closeNav();
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
    this.snack.open('Seguro de Guardar?', 'ACEPTAR', {
      duration: 5000,
    }).onAction().subscribe(() => {
      this.questionTestService.updateQuestion(this.testForm).subscribe(a => {
        this.loadQuestion(null);
      });
    });
  }

  loadQuestion(id) {
    this.questionTestService.getCustom(`${id}/solved`).subscribe((res: Question[]) => {
      this.questions = res;
      this.generateGroupTest();
    });
  }

  closeTest() {
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
}

export interface TestSolved {
  id: number;
  questionId: any;
  test: any;
  questionOption: any;
  createdAt: Date;
  updatedAt: Date;
}
