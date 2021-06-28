import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TutorService} from '../../tutor/services/tutor.service';
import {DialogService} from '../../alerts/dialog.service';
import {LoginService} from '../login.service';
import {SideNavService} from '../../../services/side-nav.service';
import {INPUT_APPEARANCE} from '../../../config/appearance.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  appearance = INPUT_APPEARANCE;
  tutorForm: FormGroup;
  hide = true;
  children: FormGroup[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private tutorService: TutorService,
              private authService: LoginService,
              private sideService: SideNavService,
              private dialogService: DialogService) {
    this.tutorForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      ci: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      cell: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      // email: [null, [Validators.required, Validators.email]],
      // password: [null, [Validators.required, Validators.minLength(8)]],
      // conditions: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit() {
  }

  accept() {
    this.authService.postCustom('register', this.tutorForm.value).subscribe((r: any) => {
      sessionStorage.setItem('token', r.access_token);
      this.authService.getCustom('profile').subscribe((p: any) => {
        console.log(p);
        sessionStorage.setItem('profile', btoa(JSON.stringify(p)));
        // this.tutorService.post(this.tutorForm.value).subscribe(res => {
        this.dialogService.toastDialog('success');
        if ((p.professional && (p.professional.position === 'Auxiliar'
          || p.professional.position === 'Encargado'
          || p.professional.position === 'Administrador'))) {
          this.router.navigate(['/admin/home']);
          this.sideService.openNav();
        } else {
          this.router.navigate(['/app/children']);
        }
      });

    });
  }

  cancel() {
    this.dialogService.toastDialog('cancel');
    this.router.navigate(['/login']);
  }
}
