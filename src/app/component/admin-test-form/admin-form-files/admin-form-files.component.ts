import {Component, Inject, OnInit} from '@angular/core';
import {Question} from '../../../interfaces/models/question';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {QuestionTestService} from '../../question-test/question-test.service';
import {environment, VERTICAL_POSITION} from '../../../../environments/environment';

@Component({
  selector: 'app-admin-form-files',
  templateUrl: './admin-form-files.component.html',
  styleUrls: ['./admin-form-files.component.scss']
})
export class AdminFormFilesComponent implements OnInit {
  question: Question;
  color: '#ffffff';
  constructor(private dialogRef: MatDialogRef<AdminFormFilesComponent>,
              private questionTestService: QuestionTestService,
              private snack: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.question = this.data.question;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  getAssets(asset) {
    return `url(${environment.server}/question-test/resources/assets/${asset})`;
  }

  onFileChange(event) {
    const [file] = event.target.files;
    console.log(file);

    const data = new FormData();
    // tslint:disable-next-line:forin
    data.append('file', file, file.name);
    this.questionTestService.uploadAsset(this.question.id, data).subscribe(a => {
      this.question.questionAssets.push(a.data);
    });
  }

  deleteAsset(id) {
    this.snack.open('Seguro de Eliminar?', 'Aceptar', {
      verticalPosition: VERTICAL_POSITION,
      duration: 3000
    }).onAction().subscribe(() => {
      this.questionTestService.deleteAsset(id).subscribe(a => {
        if (a.code && a.code === 200) {
          const del = this.question.questionAssets.find(asset => asset.id === id);
          if (del) {
            this.question.questionAssets.splice(this.question.questionAssets.indexOf(del), 1);
          }
        }
      });
    });
  }
}
