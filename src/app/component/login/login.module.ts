import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {LoginRoutingModule} from './login-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    LoginRoutingModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
