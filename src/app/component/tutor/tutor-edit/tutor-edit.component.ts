import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TutorService} from '../services/tutor.service';
import {Tutor} from '../../../interfaces/models/tutor.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {INPUT_APPEARANCE} from '../../../config/appearance.config';

@Component({
  selector: 'app-tutor-edit',
  templateUrl: './tutor-edit.component.html',
  styleUrls: ['./tutor-edit.component.scss']
})
export class TutorEditComponent implements OnInit {

  tutorForm: FormGroup;
  hide = true;
  title = '';
  appearance = INPUT_APPEARANCE;
  tutorSelect: Tutor = JSON.parse(sessionStorage.getItem('tutor'));

  constructor(private fb: FormBuilder,
              private router: Router,
              private tutorService: TutorService,
              private dialogRef: MatDialogRef<TutorEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.tutorSelect = this.data.tutor;
    this.title = this.data.title;
  }

  ngOnInit() {
    this.tutorForm = this.fb.group({
      id: [this.tutorSelect.id],
      name: [this.tutorSelect.name, [Validators.required, Validators.minLength(3)]],
      lastName: [this.tutorSelect.lastName, [Validators.required, Validators.minLength(3)]],
      ci: [this.tutorSelect.ci, [
        Validators.required, Validators.minLength(7),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*')]],
      cell: [this.tutorSelect.cell, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      email: [this.tutorSelect.email, [Validators.required, Validators.email]],
      password: [this.tutorSelect.password, [Validators.required, Validators.minLength(8)]],
      children: [this.tutorSelect.children.length, [Validators.required, Validators.max(12), Validators.min(1)]]
    });
    this.disabledInputs();
  }

  disabledInputs() {
    if (this.data.disabled && this.data.disabled === true) {
      this.tutorForm.disable();
    }
    if (this.tutorSelect.id) {
      this.tutorForm.get('ci').disable();
      this.tutorForm.removeControl('email');
      this.tutorForm.removeControl('password');
      this.tutorForm.removeControl('children');
    }
  }

  isReadonly() {
    return this.data ? this.data.disabled === true : false;
  }

  accept() {
    if (this.tutorForm.valid) {
      this.tutorService.put(this.tutorSelect.id, this.tutorForm.value).subscribe(res => {
        this.dialogRef.close(res);
      });
    }
  }
}
