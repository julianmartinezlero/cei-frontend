import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {SnackDeleteComponent} from './snack-delete/snack-delete.component';
import {SnackErrorComponent} from './snack-error/snack-error.component';
import {SnackSuccessComponent} from './snack-success/snack-success.component';
import {SnackAlertComponent} from './snack-alert/snack-alert.component';
import {VERTICAL_POSITION} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  width = '300px';
  snackConfig: any = {
    duration: 2000,
    data: null,
    verticalPosition: VERTICAL_POSITION,
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

  toastDialog(message: string, option?: string) {
    switch (option) {
      case 'delete': {
        this.snackConfig.data = message;
        this.snack.openFromComponent(SnackDeleteComponent, this.snackConfig);
        break;
      }
      case 'error': {
        this.snackConfig.data = message;
        this.snack.openFromComponent(SnackErrorComponent, this.snackConfig);
        break;
      }
      case 'success': {
        this.snackConfig.data = message;
        this.snack.openFromComponent(SnackSuccessComponent, this.snackConfig);
        break;
      }
      case 'alert': {
        this.snackConfig.data = message;
        this.snack.openFromComponent(SnackAlertComponent, this.snackConfig);
        break;
      }
      case 'cancel': {
        this.snackConfig.data = message;
        this.snack.openFromComponent(SnackAlertComponent, this.snackConfig);
        break;
      }
      case 'noAuth': {
        this.snackConfig.data = 'Error de Sesion';
        this.snack.openFromComponent(SnackErrorComponent, this.snackConfig);
        break;
      }
      case 'connection': {
        this.snackConfig.data = 'Error de Conexión';
        this.snack.openFromComponent(SnackErrorComponent, this.snackConfig);
        break;
      }
      default : {
        this.snackConfig.data = message;
        this.snack.open(message, null, this.snackConfig);
      }
    }
  }

  openDialog(s: any, config?: MatDialogConfig) {
    return this.dialog.open(s, config ? config : {
      width: this.width,
    }).afterClosed();
  }

  openCustomSnack(s: any, config?: MatDialogConfig) {
    return this.snack.openFromComponent(s, config);
  }
}
