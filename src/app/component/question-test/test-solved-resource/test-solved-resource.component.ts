import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-test-solved-resource',
  templateUrl: './test-solved-resource.component.html',
  styleUrls: ['./test-solved-resource.component.scss']
})
export class TestSolvedResourceComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<TestSolvedResourceComponent>) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
