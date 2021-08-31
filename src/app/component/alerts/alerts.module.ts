import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {SnackErrorComponent} from './snack-error/snack-error.component';
import {SnackDeleteComponent} from './snack-delete/snack-delete.component';
import {SnackSuccessComponent} from './snack-success/snack-success.component';
import {SnackAlertComponent} from './snack-alert/snack-alert.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {DialogService} from './dialog.service';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { SearchAlertComponent } from './search-alert/search-alert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DeleteDialogComponent,
    SnackErrorComponent,
    SnackDeleteComponent,
    SnackSuccessComponent,
    SnackAlertComponent,
    SearchAlertComponent
  ],
  imports: [
    CommonModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DialogService
  ],
  exports: [
    SearchAlertComponent
  ],
  entryComponents: [
    DeleteDialogComponent,
    SnackErrorComponent,
    SnackDeleteComponent,
    SnackSuccessComponent,
    SnackAlertComponent,
    SearchAlertComponent,
  ]
})
export class AlertsModule {
}
