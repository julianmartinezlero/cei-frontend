import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TutorService} from '../services/tutor.service';
import {Tutor} from '../../../interfaces/models/tutor.model';
import {DialogService} from '../../alerts/dialog.service';
import {MatDialogRef} from '@angular/material';
import {INPUT_APPEARANCE} from '../../../config/appearance.config';

@Component({
  selector: 'app-tutor-form',
  templateUrl: './tutor-form.component.html',
  styleUrls: ['./tutor-form.component.scss']
})
export class TutorFormComponent implements OnInit {
  title = 'Atras';
  tutorForm: FormGroup;
  childFormGroup: FormGroup;
  hide = true;
  children: FormGroup[] = [];
  appearance = INPUT_APPEARANCE;

  constructor(private fb: FormBuilder,
              private router: Router,
              private tutorService: TutorService,
              private dialogService: DialogService,
              private dialogRef: MatDialogRef<TutorFormComponent>) {
    this.tutorForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      ci: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      cell: [null, [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      // email: [null, [Validators.required, Validators.email]],
      // password: [null, [Validators.required, Validators.minLength(8)]],
      children: [50],
    });
    this.childFormGroup = this.fb.group({
      completeChild: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  accept() {
    localStorage.setItem('tutor', JSON.stringify(this.tutorForm.value));
    this.setChildren(this.tutorForm.get('children').value);
  }

  setChildren(n: number) {
    this.children = [];
    for (let i = 1; i <= n; i++) {
      this.children.push(
        this.createFormChild()
      );
    }
  }

  createFormChild() {
    return this.fb.group({
      id: null,
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      ci: [null, [Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      sex: [null, Validators.required],
      birthDate: [null, Validators.required],
      photo: [null]
    });
  }

  childrenInvalid() {
    const res = this.children.find(r => {
      return r.invalid === true;
    });
    if (res) {
      this.setControlChildValid(null);
    } else {
      this.setControlChildValid(true);
    }
    return res ? res.invalid : false;
  }

  setControlChildValid(value) {
    this.childFormGroup.get('completeChild').setValue(value);
  }

  endRegister() {
    const t: Tutor = this.tutorForm.value;
    t.password = t.ci;
    t.email = t.cell;
    this.tutorService.postCustom('create', t).subscribe(res => {
      this.dialogRef.close(true);
    });
  }

  cancel() {
    localStorage.removeItem('tutor');
    this.dialogRef.close();
  }


  changeListener($event, pos): void {
    this.readThis($event.target, pos);
  }

  readThis(inputValue: any, pos): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.children[pos].get('photo').setValue(myReader.result);
    };
    myReader.readAsDataURL(file);
  }

  onFileChange(event, pos) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.children[pos].patchValue({
          photo: reader.result
        });

        // need to run CD since file load runs outside of zone
        // this.cd.markForCheck();
      };
    }
  }
}
