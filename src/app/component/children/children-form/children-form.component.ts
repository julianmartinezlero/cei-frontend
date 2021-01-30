import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DialogService} from '../../alerts/dialog.service';
import {Child} from '../../../interfaces/models/child.model';
import {ChildrenService} from '../services/children.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PhotoComponent} from '../photo/photo.component';
import {LoginService} from '../../login/login.service';
import {Professional} from '../../../interfaces/models/professional.model';
import {Tutor} from '../../../interfaces/models/tutor.model';

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
  professionalId;
  tutor: Tutor;

  constructor(private fb: FormBuilder,
              private router: Router,
              private childrenService: ChildrenService,
              private dialogService: DialogService,
              private authService: LoginService,
              private dialogRef: MatDialogRef<ChildrenFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.childSelect = this.data.child;
    this.tutor = this.data.tutor;
    this.professionalId = this.data.professionalId;
    this.childForm = this.fb.group({
      id: this.childSelect ? this.childSelect.id : null,
      name: [this.childSelect ? this.childSelect.name : null, [Validators.required, Validators.minLength(3)]],
      lastName: [this.childSelect ? this.childSelect.lastName : null, [Validators.required, Validators.minLength(3)]],
      ci: [this.childSelect ? this.childSelect.ci : null,
        [Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      sex: [{value: this.childSelect ? this.childSelect.sex : null, disabled: false}, Validators.required],
      birthDate: [{value: this.childSelect ? this.childSelect.birthDate : null, disabled: false}, Validators.required],
      photo: this.childSelect ? this.childSelect.photo : null,
      professionalId: this.professionalId,
    });
  }

  ngOnInit() {
    this.loadProfile();
  }

  accept() {
    if (this.childForm.valid) {
      if (this.childSelect) {
        this.childrenService.put(this.childSelect.id, this.childForm.value).subscribe(res => {
          this.dialogRef.close(true);
        });
      } else {
        this.childrenService.post(this.childForm.value).subscribe(res => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  takePhoto() {
    this.dialogService.openDialog(PhotoComponent, {
      width: '400px'
    }).subscribe(res => {
      if (res) {
        this.childForm.get('photo').setValue(res);
      }
    });
  }
  cancel() {
    sessionStorage.removeItem('child');
    this.dialogRef.close();
  }

  loadProfile() {
    this.authService.getCustom('profile').subscribe((p: any) => {
      this.professional = p.professional;
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.childForm.patchValue({
          photo: reader.result
        });

        // need to run CD since file load runs outside of zone
        // this.cd.markForCheck();
      };
    }
  }
}
