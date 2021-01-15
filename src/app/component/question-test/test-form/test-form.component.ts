import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DialogService} from '../../alerts/dialog.service';
import {Test} from '../../../interfaces/models/test.model';
import {QuestionTestService} from '../question-test.service';
import {ChildrenService} from '../../children/services/children.service';
import {Child} from '../../../interfaces/models/child.model';
import {MatDialogRef} from '@angular/material';
import * as uuid from 'uuid';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  title = 'Atras';
  testForm: FormGroup;
  hide = true;
  stringTest = sessionStorage.getItem('test');
  titleForm = this.stringTest ?
    'Actualizar Datos de Prueba' :
    'Registro de Prueba';
  children: Child[];
  testSelect: Test = this.stringTest ? JSON.parse(this.stringTest) : {
    id: null,
    code: null,
    questionState: false,
    childId: null,
    professionalId: 1,
    tutorId: 6
  };

  constructor(private fb: FormBuilder,
              private router: Router,
              private questionTestService: QuestionTestService,
              private childrenService: ChildrenService,
              private dialogService: DialogService,
              public dialogRef: MatDialogRef<TestFormComponent>) {
    this.testForm = this.fb.group({
      id: this.testSelect.id,
      // code: [{value: uuid.v4(), disabled: true}, [Validators.required, Validators.minLength(3)]],
      questionState: [this.testSelect.questionState],
      childId: [this.testSelect.childId, Validators.required],
      professionalId: [this.testSelect.professionalId],
      tutorId: [this.testSelect.tutorId]
    });
  }

  ngOnInit() {
    this.loadChild();
  }

  accept() {
    // if (this.stringTest) {
    //   this.questionTestService.put(this.testSelect.id, this.testForm.value).subscribe(res => {
    //     this.dialogService.toastDialog('success');
    //     sessionStorage.removeItem('test');
    //     this.dialogRef.close();
    //   }, error1 => {
    //     this.dialogService.toastDialog('error');
    //   });
    // } else {
      this.questionTestService.post(this.testForm.value).subscribe(res => {
        this.dialogService.toastDialog('success');
        sessionStorage.removeItem('test');
        this.dialogRef.close();
      }, error1 => {
        this.dialogService.toastDialog('error');
      });
    // }
  }

  loadChild() {
    this.childrenService.get().subscribe((res: Child[]) => {
      this.children = res;
    });
  }

  cancel() {
    sessionStorage.removeItem('test');
    this.dialogService.toastDialog('cancel');
    this.dialogRef.close();
    // this.router.navigate([this.questionTestService.route]);
  }
}
