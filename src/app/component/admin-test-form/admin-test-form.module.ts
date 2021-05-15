import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdateFormComponent} from './update-form/update-form.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatRadioModule, MatRippleModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {AdminFormRoutingModule} from './admin-form-routing.module';
import {AdminFormFilesComponent} from './admin-form-files/admin-form-files.component';

@NgModule({
  declarations: [UpdateFormComponent, AdminFormFilesComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    MatTooltipModule,
    MatIconModule,
    AdminFormRoutingModule,
    MatRippleModule,
  ],
  entryComponents: [
    AdminFormFilesComponent
  ],
})
export class AdminTestFormModule { }
