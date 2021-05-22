import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {SideNavService} from '../../../services/side-nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router,
              private sideService: SideNavService) {
    this.user = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  send() {
    this.loginService.postCustom('login', this.user.value).subscribe((res: any) => {
      sessionStorage.setItem('token', res.access_token);
      this.sideService.openMenu();
      this.loginService.getCustom('profile').subscribe((p: any) => {
        sessionStorage.setItem('profile', btoa(JSON.stringify(p)));
        if ((p.professional && (p.professional.position === 'Auxiliar'
          || p.professional.position === 'Encargado'
          || p.professional.position === 'Administrador'))) {
          this.router.navigate(['/admin/home']);
        } else {
          this.router.navigate(['/app/children']);
        }
      });
    });
  }

  register() {
    this.router.navigate(['/register']);
  }

}
