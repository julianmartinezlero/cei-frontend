import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildrenListComponent} from './children-list/children-list.component';
import {ChildrenService} from './services/children.service';
import {ToolsModule} from '../tools/tools.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule, MatSidenavModule,
  MatSortModule,
  MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {ChildrenRoutingModule} from './children-routing.module';
import {ChildrenFormComponent} from './children-form/children-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ChildrenShowComponent} from './childer-show/children-show.component';
import {WebcamModule} from 'ngx-webcam';
import {PhotoComponent} from './photo/photo.component';
import {TutorService} from '../tutor/services/tutor.service';
import {QuestionTestModule} from '../question-test/question-test.module';
import { ChildTreatmentsComponent } from './child-treatments/child-treatments.component';

@NgModule({
  declarations: [ChildrenListComponent, ChildrenFormComponent, ChildrenShowComponent, PhotoComponent, ChildTreatmentsComponent],
  imports: [
    CommonModule,
    ToolsModule,
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
  ],
  providers: [
    ChildrenService,
    TutorService,
    // { provide: LOCALE_ID, useValue: 'es' },
  ],
  entryComponents: [
    ChildrenShowComponent,
    PhotoComponent,
    ChildTreatmentsComponent
  ]
})
export class ChildrenModule {
}
