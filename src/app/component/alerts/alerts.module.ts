import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {SnackErrorComponent} from './snack-error/snack-error.component';
import {SnackDeleteComponent} from './snack-delete/snack-delete.component';
import {SnackSuccessComponent} from './snack-success/snack-success.component';
import {SnackAlertComponent} from './snack-alert/snack-alert.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {DialogService} from './dialog.service';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [
    DeleteDialogComponent,
    SnackErrorComponent,
    SnackDeleteComponent,
    SnackSuccessComponent,
    SnackAlertComponent
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
  ],
  providers: [
    DialogService
  ],
  entryComponents: [
    DeleteDialogComponent,
    SnackErrorComponent,
    SnackDeleteComponent,
    SnackSuccessComponent,
    SnackAlertComponent
  ]
})
export class AlertsModule {
}
