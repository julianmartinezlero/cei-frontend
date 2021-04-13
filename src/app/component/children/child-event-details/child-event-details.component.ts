import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {TreatmentChildSession} from '../../../interfaces/models/TreatmentChildSession.model';
import {TreatmentSessionService} from '../services/treatment-session.service';

@Component({
  selector: 'app-child-event-details',
  templateUrl: './child-event-details.component.html',
  styleUrls: ['./child-event-details.component.scss']
})
export class ChildEventDetailsComponent implements OnInit {
  session: TreatmentChildSession;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<ChildEventDetailsComponent>,
              private snack: MatSnackBar,
              private treatmentSessionService: TreatmentSessionService) {
    this.session = this.data.session;
  }

  ngOnInit() {
  }

  completeSession() {
    this.snack.open('Marcar como Completado?', 'Aceptar', {
      duration: 5000,
      panelClass: 'white-snack',
    }).onAction().subscribe(() => {
      this.treatmentSessionService.updateSession(this.session.id).subscribe(a => {
        this.dialogRef.close(true);
      });
    });
  }

}
