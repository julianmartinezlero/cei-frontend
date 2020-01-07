import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {SnackDeleteComponent} from './snack-delete/snack-delete.component';
import {SnackErrorComponent} from './snack-error/snack-error.component';
import {SnackSuccessComponent} from './snack-success/snack-success.component';
import {SnackAlertComponent} from './snack-alert/snack-alert.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  width = '300px';
  snackConfig = {
    duration: 2000,
    data: null
  };

  constructor(private dialog: MatDialog,
              private snack: MatSnackBar) {
  }

  deleteDialog(text: string) {
    return this.dialog.open(DeleteDialogComponent, {
      width: this.width,
      data: text
    }).afterClosed();
  }

  toastDialog(type: string) {
    switch (type) {
      case 'delete': {
        this.snack.openFromComponent(SnackDeleteComponent, this.snackConfig);
        break;
      }
      case 'error': {
        this.snack.openFromComponent(SnackErrorComponent, this.snackConfig);
        break;
      }
      case 'success': {
        this.snack.openFromComponent(SnackSuccessComponent, this.snackConfig);
        break;
      }
      case 'alert': {
        this.snack.openFromComponent(SnackAlertComponent, this.snackConfig);
        break;
      }
      case 'cancel': {
        this.snackConfig.data = 'Cancelado';
        this.snack.openFromComponent(SnackAlertComponent, this.snackConfig);
        break;
      }
      case 'noAuth': {
        this.snackConfig.data = 'Error de Sesion';
        this.snack.openFromComponent(SnackErrorComponent, this.snackConfig);
        break;
      }
    }
  }

  openDialog(s: any, config?: MatDialogConfig) {
    return this.dialog.open(s, config ? config : {
      width: this.width,
    }).afterClosed();
  }
}
