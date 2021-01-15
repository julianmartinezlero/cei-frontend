import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Question} from '../../../interfaces/models/question';

@Component({
  selector: 'app-test-solved-resource',
  templateUrl: './test-solved-resource.component.html',
  styleUrls: ['./test-solved-resource.component.scss']
})
export class TestSolvedResourceComponent implements OnInit {
  // @Input() images: string[] = [];
  question: Question;
  color: '#ffffff';
  constructor(private dialogRef: MatDialogRef<TestSolvedResourceComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.question = this.data.question;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
