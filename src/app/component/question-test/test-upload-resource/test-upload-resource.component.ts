import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {QuestionTestService} from '../question-test.service';

@Component({
  selector: 'app-test-upload-resource',
  templateUrl: './test-upload-resource.component.html',
  styleUrls: ['./test-upload-resource.component.scss']
})
export class TestUploadResourceComponent implements OnInit {

  title = 'Subir archivo de imagen';
  fotoUrl;
  formfile: FormControl;
  archivo: string;
  urlServer = environment.server;
  visible = false;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private matDialogRef: MatDialogRef<TestUploadResourceComponent>,
              private testService: QuestionTestService) {
    this.formfile =  new FormControl('file', [Validators.required]);
    console.log(this.data);
    if (this.data.resourceUrl) {
      this.archivo = `${this.urlServer}/question-test/resource/solved/${this.data.resourceUrl}`;
    }
  }

  ngOnInit(): void {
  }

  aceptar() {
    this.matDialogRef.close(this.fotoUrl);
  }
  onFileChange(event) {
    this.visible = true;
    const formData = new FormData();
    const [file] = event.target.files;

    // @ts-ignore
    const _URL = window.URL || window.webkitURL;
    let img;

    img = new Image();
    img.onload = (e) => {
      const i = e.target;
      formData.append('file', file, file.name);
      this.testService.uploadResource(formData).subscribe((a: any) => {
        this.archivo = `${this.urlServer}/question-test/resource/solved/${a.data.filename}`;
        this.fotoUrl = a.data.filename;
        this.visible = false;
      });


    };
    img.onerror = () => {
      // this.snack.open(`Error al subir al imagen`,'', SNACK_CONFIG);
      this.visible = false;
    };
    img.src = _URL.createObjectURL(file);
  }

  getUrlArchivo() {
    return {
      backgroundImage: `url(${this.archivo})`
    };
  }

  // getStyleCTemplate() {
  //   if (this.archivo) {
  //     return {
  //       backgroundImage: 'linear-gradient(#ffffff, #ffffff),url(/assets/imagenes/photo-template.jpeg)'
  //     };
  //   } else {
  //     return {
  //       backgroundImage: ``,
  //     };
  //   }
  //
  // }
}
