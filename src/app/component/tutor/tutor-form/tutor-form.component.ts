import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TutorService} from '../services/tutor.service';
import {Tutor} from '../../../interfaces/models/tutor.model';
import {DialogService} from '../../alerts/dialog.service';

@Component({
  selector: 'app-tutor-form',
  templateUrl: './tutor-form.component.html',
  styleUrls: ['./tutor-form.component.scss']
})
export class TutorFormComponent implements OnInit {
  title = 'Atras';
  tutorForm: FormGroup;
  childFormGroup: FormGroup;
  hide = true;
  children: FormGroup[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private tutorService: TutorService,
              private dialogService: DialogService) {
    this.tutorForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      ci: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      cell: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      children: [null, [Validators.required, Validators.max(12), Validators.min(1)]]
    });
    this.childFormGroup = this.fb.group({
      completeChild: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  accept() {
    localStorage.setItem('tutor', JSON.stringify(this.tutorForm.value));
    this.setChildren(this.tutorForm.get('children').value);
  }

  setChildren(n: number) {
    this.children = [];
    for (let i = 1; i <= n; i++) {
      this.children.push(
        this.createFormChild()
      );
    }
  }

  createFormChild() {
    return this.fb.group({
      id: null,
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      ci: [null, [Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      sex: [null, Validators.required],
      birthDate: [null, Validators.required]
    });
  }

  childrenInvalid() {
    const res = this.children.find(r => {
      return r.invalid === true;
    });
    if (res) {
      this.setControlChildValid(null);
    } else {
      this.setControlChildValid(true);
    }
    return res ? res.invalid : false;
  }

  setControlChildValid(value) {
    this.childFormGroup.get('completeChild').setValue(value);
  }

  endRegister() {
    const t: Tutor = this.tutorForm.value;
    t.children = this.children.map(c => {
      return c.value;
    });
    this.tutorService.post(t).subscribe(res => {
      this.dialogService.toastDialog('success');
      this.router.navigate(['/tutor']);
    }, error1 => {
      this.dialogService.toastDialog('error');
    });
  }

  cancel() {
    localStorage.removeItem('tutor');
    this.dialogService.toastDialog('cancel');
    this.router.navigate(['/tutor']);
  }
}
