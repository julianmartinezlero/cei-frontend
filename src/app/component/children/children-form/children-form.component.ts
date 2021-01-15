import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DialogService} from '../../alerts/dialog.service';
import {Child} from '../../../interfaces/models/child.model';
import {ChildrenService} from '../services/children.service';
import {MatDialogRef} from '@angular/material';
import {PhotoComponent} from '../photo/photo.component';
import {LoginService} from '../../login/login.service';
import {Professional} from '../../../interfaces/models/professional.model';

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
    'Registro de Niño(a)';
  professional: Professional;
  childSelect: Child = {
    id: null,
    name: null,
    lastName: null,
    sex: null,
    birthDate: null,
    ci: null,
    photo: null,
    createdAt: null,
    updatedAt: null,
  };

  constructor(private fb: FormBuilder,
              private router: Router,
              private childrenService: ChildrenService,
              private dialogService: DialogService,
              private authService: LoginService,
              private dialogRef: MatDialogRef<ChildrenFormComponent>) {
    this.childForm = this.fb.group({
      id: this.childSelect.id,
      name: [this.childSelect.name, [Validators.required, Validators.minLength(3)]],
      lastName: [this.childSelect.lastName, [Validators.required, Validators.minLength(3)]],
      ci: [this.childSelect.ci, [Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      sex: [{value: this.childSelect.sex, disabled: false}, Validators.required],
      birthDate: [{value: this.childSelect.birthDate, disabled: false}, Validators.required],
      photo: null,
    });
  }

  ngOnInit() {
    this.loadProfile();
  }

  accept() {
    console.log(this.childForm.value);
    if (this.stringChild) {
      this.childrenService.put(this.childSelect.id, this.childForm.value).subscribe(res => {
        this.dialogService.toastDialog('success');
        sessionStorage.removeItem('child');
        this.dialogRef.close(true);
      }, error1 => {
        this.dialogService.toastDialog('error');
      });
    } else {
      const c: Child = this.childForm.value;
      c.professional = this.professional.position ? c.professional : this.professional;
      this.childrenService.post(this.childForm.value).subscribe(res => {
        this.dialogService.toastDialog('success');
        sessionStorage.removeItem('child');
        this.dialogRef.close(true);
      }, error1 => {
        this.dialogService.toastDialog('error');
      });
    }
  }

  takePhoto() {
    this.dialogService.openDialog(PhotoComponent, {
      width: '400px'
    }).subscribe(res => {
      if (res) {
        this.childSelect.photo = res;
        this.childForm.get('photo').setValue(res);
      }
    });
  }
  cancel() {
    sessionStorage.removeItem('child');
    this.dialogRef.close();
    this.dialogService.toastDialog('cancel');
  }

  loadProfile() {
    this.authService.getCustom('profile').subscribe((p: any) => {
      this.professional = p.professional;
    });
  }
}
