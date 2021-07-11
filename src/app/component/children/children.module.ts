import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildrenListComponent} from './children-list/children-list.component';
import {ChildrenService} from './services/children.service';
import {ToolsModule} from '../tools/tools.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule, MatTreeModule
} from '@angular/material';
import {ChildrenRoutingModule} from './children-routing.module';
import {ChildrenFormComponent} from './children-form/children-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ChildrenShowComponent} from './childer-show/children-show.component';
import {WebcamModule} from 'ngx-webcam';
import {PhotoComponent} from './photo/photo.component';
import {TutorService} from '../tutor/services/tutor.service';
import {QuestionTestModule} from '../question-test/question-test.module';
import {ChildTreatmentsComponent} from './child-treatments/child-treatments.component';
import {ChildTreatmentTracingComponent} from './child-treartment-tracing/child-treatment-tracing.component';
import {TreatmentService} from '../question-test/treatment.service';
import {FullCalendarModule} from '@fullcalendar/angular';

import * as moment from 'moment';
import { ChildEventDetailsComponent } from './child-event-details/child-event-details.component';
import {TreatmentSessionService} from './services/treatment-session.service';
import {PrintPdfService} from '../../services/printPdf.service';

moment().locale('es-Es');

@NgModule({
  declarations: [
    ChildrenListComponent,
    ChildrenFormComponent,
    ChildrenShowComponent,
    PhotoComponent,
    ChildTreatmentsComponent,
    ChildTreatmentTracingComponent,
    ChildEventDetailsComponent
  ],
  imports: [
    CommonModule,
    ToolsModule,
    FullCalendarModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    ChildrenRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatRippleModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    WebcamModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule,
    QuestionTestModule,
    MatSidenavModule,
    MatTreeModule,
  ],
  providers: [
    ChildrenService,
    TutorService,
    TreatmentService,
    TreatmentSessionService,
    PrintPdfService,
    // { provide: LOCALE_ID, useValue: 'es' },
  ],
  entryComponents: [
    ChildrenShowComponent,
    PhotoComponent,
    ChildTreatmentsComponent,
    ChildTreatmentTracingComponent,
    ChildEventDetailsComponent,
  ]
})
export class ChildrenModule {
}
