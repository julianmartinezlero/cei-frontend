import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerfilComponent} from './perfil/perfil.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from '../../services/authInterceptor.service';

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: []
})
export class UserModule {
}
