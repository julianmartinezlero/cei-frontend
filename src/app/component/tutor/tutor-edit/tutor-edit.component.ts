import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TutorService} from '../services/tutor.service';
import {DialogService} from '../../alerts/dialog.service';
import {Tutor} from '../../../interfaces/models/tutor.model';

@Component({
  selector: 'app-tutor-edit',
  templateUrl: './tutor-edit.component.html',
  styleUrls: ['./tutor-edit.component.scss']
})
export class TutorEditComponent implements OnInit {

  title = 'Atras';
  tutorForm: FormGroup;
  hide = true;
  tutorSelect: Tutor = JSON.parse(sessionStorage.getItem('tutor'));

  constructor(private fb: FormBuilder,
              private router: Router,
              private tutorService: TutorService,
              private dialogService: DialogService) {
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
  }

  accept() {
    this.tutorService.put(this.tutorSelect.id, this.tutorForm.value).subscribe(res => {
      this.dialogService.toastDialog('success');
      sessionStorage.removeItem('tutor');
      this.router.navigate(['/tutor']);
    }, error1 => {
      this.dialogService.toastDialog('error');
    });
  }

  cancel() {
    sessionStorage.removeItem('tutor');
    this.dialogService.toastDialog('cancel');
    this.router.navigate(['/tutor']);
  }
}
