import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-snack-error',
  templateUrl: './snack-error.component.html',
  styleUrls: ['./snack-error.component.scss']
})
export class SnackErrorComponent implements OnInit {
  error = 'Se Produjeron algunos errores';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    if (this.data) {
      this.error = data;
    }
  }

  ngOnInit() {
  }

}
