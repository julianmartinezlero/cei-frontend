import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-test-accept',
  templateUrl: './test-accept.component.html',
  styleUrls: ['./test-accept.component.scss']
})
export class TestAcceptComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TestAcceptComponent>) {
  }

  ngOnInit() {
  }

  accept() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }
}
