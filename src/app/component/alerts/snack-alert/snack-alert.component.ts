import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-snack-alert',
  templateUrl: './snack-alert.component.html',
  styleUrls: ['./snack-alert.component.scss']
})
export class SnackAlertComponent {
  text = 'Operacion No permitida';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    if (this.data) {
      this.text = data;
    }
  }
}
