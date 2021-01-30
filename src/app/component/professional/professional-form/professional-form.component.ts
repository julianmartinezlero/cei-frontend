import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DialogService} from '../../alerts/dialog.service';
import {ProfessionalService} from '../services/professional.service';
import {Professional} from '../../../interfaces/models/professional.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-professional-form',
  templateUrl: './professional-form.component.html',
  styleUrls: ['./professional-form.component.scss']
})
export class ProfessionalFormComponent implements OnInit {
  professionalForm: FormGroup;
  hide = true;
  titleForm = '';
  professionalSelect: Professional =  {
    id: null,
    password: null,
    name: null,
    lastName: null,
    email: null,
    cell: null,
    profession: null,
    position: null,
    ci: null,
    createdAt: null,
    updatedAt: null,
  };

  constructor(private fb: FormBuilder,
              private router: Router,
              private professionalService: ProfessionalService,
              private dialogRef: MatDialogRef<ProfessionalFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    if (this.data.professional) {
      this.professionalSelect = this.data.professional;
    }

    this.titleForm = this.data.title;

    this.professionalForm = this.fb.group({
      id: [this.professionalSelect.id],
      name: [this.professionalSelect.name, [Validators.required, Validators.minLength(3)]],
      lastName: [this.professionalSelect.lastName, [Validators.required, Validators.minLength(3)]],
      ci: [this.professionalSelect.ci, [
        Validators.required, Validators.minLength(7),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*')]],
      cell: [this.professionalSelect.cell,
        [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      position: [this.professionalSelect.position, [Validators.required]],
      profession: [this.professionalSelect.profession, [Validators.required, Validators.minLength(3)]],
      email: [this.professionalSelect.email, [Validators.required, Validators.email]],
      password: [this.professionalSelect.password, [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    if (this.data.disabled === true) {
      this.professionalForm.disable();
    }
    if (this.professionalSelect.id) {
      this.professionalForm.get('ci').disable();
      this.professionalForm.removeControl('email');
      this.professionalForm.removeControl('password');
    }
  }

  accept() {
    if (this.professionalForm.valid) {
      if (this.professionalSelect.id) {
        this.professionalService.put(this.professionalSelect.id, this.professionalForm.value).subscribe(res => {
          this.dialogRef.close(true);
        });
      } else {
        this.professionalService.post(this.professionalForm.value).subscribe(res => {
          this.dialogRef.close(true);
        });
      }
    }
  }
}
