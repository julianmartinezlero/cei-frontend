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

  accept() {
    this.snack.open('Seguro de Guardar?', 'ACEPTAR', {
      duration: 5000,
    }).onAction().subscribe(() => {
      this.questionTestService.updateQuestion(this.questions.slice(0, 12)).subscribe(a => {
        this.loadQuestion(null);
        if (this.questions.length > 12) {
          localStorage.setItem('test', JSON.stringify(this.questions));
        } else {
          localStorage.removeItem('test');
        }
      });
    });
  }

  loadQuestion(id) {
    this.questionTestService.getCustom(`${id}/solved`).subscribe((res: Question[]) => {
      this.questions = res;
      if (localStorage.getItem('test')) {
        const questions: Question[] = JSON.parse(localStorage.getItem('test'));
        if (questions.length > 12) {
          this.questions = this.questions.concat(questions.slice(12, questions.length));
        }
      }
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

  addQuestion() {
    this.questions.push({
      id: new Date().getTime(),
      question: 'Escribe tu pregunta',
      details: 'Escribe una descripción',
      questionOptions: [],
      questionAssets: [],
      questionType: 'verbal',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  removeQuestion(i: number) {
    this.questions.splice(i, 1);
  }

  addOption(i: number) {
   let total =  3;
   while (total >= 0) {
     if (!this.questions[i].questionOptions.find(a => a.value === total)) {
       this.questions[i].questionOptions.push({
         id: new Date().getTime(),
         value: total,
         description: 'Escribe tu opción',
       });
       break;
     }
     total--;
   }
   this.questions[i].questionOptions = this.questions[i].questionOptions.sort((a, b) => b.value - a.value);
  }

  deleteOption(question: Question, j: number) {
    question.questionOptions.splice(j, 1);
  }
}
