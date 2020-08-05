import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TutorFormComponent} from './tutor-form/tutor-form.component';
import {TutorListComponent} from './tutor-list/tutor-list.component';
import {TutorService} from './services/tutor.service';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSelectModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {ToolsModule} from '../tools/tools.module';
import {TutorRoutingModule} from './tutor-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertsModule} from '../alerts/alerts.module';
import {TutorEditComponent} from './tutor-edit/tutor-edit.component';
import {TutorIndexComponent} from './tutor-index/tutor-index.component';

@NgModule({
  declarations: [
    TutorFormComponent,
    TutorListComponent,
    TutorEditComponent,
    TutorIndexComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    ToolsModule,
    AlertsModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    TutorRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatStepperModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [
    TutorService,
  ],
  entryComponents: [
    TutorFormComponent,
  ]
})
export class TutorModule {
}
