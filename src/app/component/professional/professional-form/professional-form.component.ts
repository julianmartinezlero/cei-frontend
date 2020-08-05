import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DialogService} from '../../alerts/dialog.service';
import {ProfessionalService} from '../services/professional.service';
import {Professional} from '../../../interfaces/models/professional.model';

@Component({
  selector: 'app-professional-form',
  templateUrl: './professional-form.component.html',
  styleUrls: ['./professional-form.component.scss']
})
export class ProfessionalFormComponent implements OnInit {
  title = 'Atras';
  professionalForm: FormGroup;
  hide = true;
  stringProfessional = sessionStorage.getItem('professional');
  titleForm = this.stringProfessional ?
    'Actualizar Datos del Profesional' :
    'Registro de Profesional';
  professionalSelect: Professional = this.stringProfessional ? JSON.parse(this.stringProfessional) : {
    id: null,
    password: null,
    name: null,
    lastName: null,
    email: null,
    cell: null,
    profession: null,
    position: null,
    ci: null,
    createdAt: null,
    updatedAt: null,
  };

  constructor(private fb: FormBuilder,
              private router: Router,
              private professionalService: ProfessionalService,
              private dialogService: DialogService) {
    this.professionalForm = this.fb.group({
      id: [this.professionalSelect.id],
      name: [this.professionalSelect.name, [Validators.required, Validators.minLength(3)]],
      lastName: [this.professionalSelect.lastName, [Validators.required, Validators.minLength(3)]],
      ci: [this.professionalSelect.ci, [
        Validators.required, Validators.minLength(7),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*')]],
      cell: [this.professionalSelect.cell,
        [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      position: [this.professionalSelect.position, [Validators.required]],
      profession: [this.professionalSelect.profession, [Validators.required, Validators.minLength(3)]],
      email: [this.professionalSelect.email, [Validators.required, Validators.email]],
      password: [this.professionalSelect.password, [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
  }

  accept() {
    if (this.stringProfessional) {
      this.professionalService.put(this.professionalSelect.id, this.professionalForm.value).subscribe(res => {
        this.dialogService.toastDialog('success');
        sessionStorage.removeItem('professional');
        // this.router.navigate(['/professional']);
      }, error1 => {
        this.dialogService.toastDialog('error');
      });
    } else {
      this.professionalService.post(this.professionalForm.value).subscribe(res => {
        this.dialogService.toastDialog('success');
        sessionStorage.removeItem('professional');
        // this.router.navigate(['/professional']);
      }, error1 => {
        this.dialogService.toastDialog('error');
      });
    }
  }

  cancel() {
    sessionStorage.removeItem('professional');
    this.dialogService.toastDialog('cancel');
    // this.router.navigate(['/admin/professional']);
  }
}
