import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TutorService} from '../../tutor/services/tutor.service';
import {DialogService} from '../../alerts/dialog.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  tutorForm: FormGroup;
  hide = true;
  children: FormGroup[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private tutorService: TutorService,
              private authService: LoginService,
              private dialogService: DialogService) {
    this.tutorForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      ci: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      cell: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      conditions: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit() {
  }

  accept() {
    this.authService.postCustom('register', this.tutorForm.value).subscribe((r: any) => {
      sessionStorage.setItem('token', r.access_token);
      this.authService.getCustom('profile').subscribe((p: any) => {
        sessionStorage.setItem('profile', btoa(JSON.stringify(p[0])));
        this.tutorService.post(this.tutorForm.value).subscribe(res => {
          this.dialogService.toastDialog('success');
          // if (p[0].position !== null) {
          //   this.router.navigate(['/admin/tutor']);
          // } else {
          this.router.navigate(['/app']);
          // }
        });
      });

    });
  }

  cancel() {
    this.dialogService.toastDialog('cancel');
    this.router.navigate(['/login']);
  }
}
