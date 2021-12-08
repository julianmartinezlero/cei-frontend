import {Component, Inject, OnInit} from '@angular/core';
import {TestChild} from '../../../interfaces/models/testChild.model';
import {Question, QuestionOption} from '../../../interfaces/models/question';
import {Child} from '../../../interfaces/models/child.model';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {QuestionTestService} from '../question-test.service';
import {ChildrenService} from '../../children/services/children.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {environment} from '../../../../environments/environment';
import {TestUploadResourceComponent} from '../test-upload-resource/test-upload-resource.component';
import {DialogService} from '../../alerts/dialog.service';

@Component({
  selector: 'app-test-show-result',
  templateUrl: './test-show-result.component.html',
  styleUrls: ['./test-show-result.component.scss']
})
export class TestShowResultComponent implements OnInit {
  title = 'Atras';
  // testForm: TestSolved[] = [];
  hide = true;
  test: TestChild;
  titleForm = 'Resolver Prubea';
  questions: TestResolved;
  testId: number;
  childSelect: Child;
  childId: number;
  defaultPhoto = 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s32-c-fbw=1/photo.jpg';

  constructor(private fb: FormBuilder,
              private router: Router,
              private questionTestService: QuestionTestService,
              private childService: ChildrenService,
              private dialogService: DialogService,
              private dialogRef: MatDialogRef<TestShowResultComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any
  ) {
  }

  ngOnInit() {
    this.childService.get(this.data.childId).subscribe(r => {
      this.childSelect = r as Child;
    });
    this.loadQuestion(this.data.testId);
  }

  loadQuestion(id) {
    this.questionTestService.getCustom(`${id}/resolved`).subscribe((res: TestResolved[]) => {
      this.questions = res[0];
      // this.generateGroupTest();
    });
  }

  closeTest() {
    this.dialogRef.close('open');
  }

  getSrc(resourceUrl: string) {
    return `${environment.server}/question-test/resource/solved/${resourceUrl}`;
  }

  isVideo(archivo) {
    const a = archivo.split('.');
    return a[1] === 'mp4';
  }

  uploadResource(a) {
    this.dialogService.openDialog(TestUploadResourceComponent, {
      width: '500px',
      height: '500px',
      data:  a,
    }).subscribe(r => {
      if (r) {
        a.resourceUrl = r;
        this.questionTestService.put(`solved/update/${a.id}`, a).subscribe((b: any) => {
          this.ngOnInit();
        });
      }
    });
  }
}
export interface TestResolved {
  code: string;
  id: string;
  totalValue: number;
  testResults: TestResult[];
}

export interface TestResult {
  resourceUrl: string;
  question: Question;
  questionOption: QuestionOption;
  [key: string]: any;
}
