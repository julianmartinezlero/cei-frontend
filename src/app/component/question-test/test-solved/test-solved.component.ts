import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionTestService} from '../question-test.service';
import {DialogService} from '../../alerts/dialog.service';
import {Question} from '../../../interfaces/models/question';
import {ChildrenService} from '../../children/services/children.service';
import {Child} from '../../../interfaces/models/child.model';
import {MatDialogRef} from '@angular/material';
import {TestSolvedResourceComponent} from '../test-solved-resource/test-solved-resource.component';
import * as uuid from 'uuid';
import {TestAcceptComponent} from '../test-accept/test-accept.component';

@Component({
  selector: 'app-test-solved',
  templateUrl: './test-solved.component.html',
  styleUrls: ['./test-solved.component.scss']
})
export class TestSolvedComponent implements OnInit {

  title = 'Atras';
  testForm = [];
  hide = true;
  test = JSON.parse(sessionStorage.getItem('test'));
  titleForm = 'Resolver Prubea';
  questions: Question[];
  childSelect: Child;
  defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private questionTestService: QuestionTestService,
              private dialogService: DialogService,
              private childService: ChildrenService,
              private dialogRef: MatDialogRef<TestSolvedComponent>) {
  }

  ngOnInit() {
    this.childSelect = JSON.parse(sessionStorage.getItem('child'));
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
        // let total =  0;
        // this.testForm.forEach(q => {
        //   total += q.questionOption.value;
        // });
        // total = total / 12;
        this.questionTestService.post({
          id: null,
          code: uuid.v4(),
          questionState: 0,
          childId: this.childSelect.id,
          professional: null,
          // totalValue: total,
        }).subscribe(res => {
          this.testForm.forEach(q => {
            q.test = res;
          });
          this.questionTestService.postCustom('solved/save', {
            solution: this.testForm,
          }).subscribe(r => {
            this.dialogService.toastDialog('success');
            this.dialogRef.close(true);
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

  loadChild(id) {
    this.childService.get(id).subscribe((res: Child) => {
      this.childSelect = res;
    });
  }

  openResource() {
    this.dialogService.openDialog(TestSolvedResourceComponent, {
      width: '400px',
    }).subscribe(r => {
      console.log(r);
    });
  }

  cancel() {
    sessionStorage.removeItem('test');
    this.dialogService.toastDialog('cancel');
    this.dialogRef.close();
    // this.router.navigate([this.questionTestService.route]);
  }
}
