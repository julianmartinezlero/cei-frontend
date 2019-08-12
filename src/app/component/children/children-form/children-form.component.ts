import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Professional} from '../../../interfaces/models/professional.model';
import {Router} from '@angular/router';
import {ProfessionalService} from '../../professional/services/professional.service';
import {DialogService} from '../../alerts/dialog.service';
import {Child} from '../../../interfaces/models/child.model';
import {ChildrenService} from '../services/children.service';

@Component({
  selector: 'app-children-form',
  templateUrl: './children-form.component.html',
  styleUrls: ['./children-form.component.scss']
})
export class ChildrenFormComponent implements OnInit {

  title = 'Atras';
  childForm: FormGroup;
  hide = true;
  stringChild = sessionStorage.getItem('child');
  titleForm = this.stringChild ?
    'Actualizar Datos del Niño(a)' :
    'Resistro de Niño(a)';
  childSelect: Child = this.stringChild ? JSON.parse(this.stringChild) : {
    id: null,
    password: null,
    name: null,
    lastName: null,
    sex: null,
    tutor: null,
    birthDate: null,
    ci: null,
    createdAt: null,
    updatedAt: null,
  };

  constructor(private fb: FormBuilder,
              private router: Router,
              private childrenService: ChildrenService,
              private dialogService: DialogService) {
    this.childForm = this.fb.group({
      id: this.childSelect.id,
      name: [this.childSelect.name, [Validators.required, Validators.minLength(3)]],
      lastName: [this.childSelect.lastName, [Validators.required, Validators.minLength(3)]],
      ci: [this.childSelect.ci, [Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      sex: [{value: this.childSelect.sex, disabled: true}, Validators.required],
      birthDate: [{value: this.childSelect.birthDate, disabled: true}, Validators.required]
    });
  }

  ngOnInit() {

  }

  accept() {
    if (this.stringChild) {
      this.childrenService.put(this.childSelect.id, this.childForm.value).subscribe(res => {
        this.dialogService.toastDialog('success');
        sessionStorage.removeItem('child');
        this.router.navigate(['/child']);
      }, error1 => {
        this.dialogService.toastDialog('error');
      });
    } else {
      this.childrenService.post(this.childForm.value).subscribe(res => {
        this.dialogService.toastDialog('success');
        sessionStorage.removeItem('child');
        this.router.navigate(['/child']);
      }, error1 => {
        this.dialogService.toastDialog('error');
      });
    }
  }

  cancel() {
    sessionStorage.removeItem('child');
    this.dialogService.toastDialog('cancel');
    this.router.navigate(['/child']);
  }
}
