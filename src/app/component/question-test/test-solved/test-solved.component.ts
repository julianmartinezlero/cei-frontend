import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Child} from '../../../interfaces/models/child.model';
import {Test} from '../../../interfaces/models/test.model';
import {Router} from '@angular/router';
import {QuestionTestService} from '../question-test.service';
import {ChildrenService} from '../../children/services/children.service';
import {DialogService} from '../../alerts/dialog.service';
import {Question} from '../../../interfaces/models/question';

@Component({
  selector: 'app-test-solved',
  templateUrl: './test-solved.component.html',
  styleUrls: ['./test-solved.component.scss']
})
export class TestSolvedComponent implements OnInit {

  title = 'Atras';
  testForm: FormGroup;
  hide = true;
  stringTest = sessionStorage.getItem('test');
  titleForm = this.stringTest ?
    'Actualizar Datos de Prueba' :
    'Resistro de Prueba';
  questions: Question[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private questionTestService: QuestionTestService,
              private dialogService: DialogService) {
    this.testForm = this.fb.group({});
  }

  ngOnInit() {
    this.loadQuestion(1);
  }

  accept() {
  }

  loadQuestion(id) {
    this.questionTestService.getCustom(`${id}/solved`).subscribe((res: Question[]) => {
      this.questions = res;
    });
  }

  cancel() {
    sessionStorage.removeItem('test');
    this.dialogService.toastDialog('cancel');
    this.router.navigate([this.questionTestService.route]);
  }
}
