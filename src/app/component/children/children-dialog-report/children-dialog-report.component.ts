import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';
import {INPUT_APPEARANCE} from '../../../config/appearance.config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-children-dialog-report',
  templateUrl: './children-dialog-report.component.html',
  styleUrls: ['./children-dialog-report.component.scss']
})
export class ChildrenDialogReportComponent implements OnInit {
  appearance = INPUT_APPEARANCE;
  childForm: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ChildrenDialogReportComponent>) {
    this.childForm = this.fb.group({
      dateIni: [ null, Validators.required],
      dateEnd: [null, Validators.required],
    });
  }

  ngOnInit() {

  }

  cancel() {
    this.dialogRef.close();
  }

  print() {
    if (this.childForm.valid) {
      const a = this.childForm.value;
      a.dateIni = moment(a.dateIni).format('YYYY-MM-DD');
      a.dateEnd = moment(a.dateEnd).format('YYYY-MM-DD');
      this.dialogRef.close(a);
    } else {
      this.childForm.markAllAsTouched();
    }
  }
}
