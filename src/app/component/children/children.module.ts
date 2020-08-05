import {NgModule} from '@angular/core';
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
  MatSelectModule,
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

@NgModule({
  declarations: [ChildrenListComponent, ChildrenFormComponent, ChildrenShowComponent, PhotoComponent],
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
  ],
  providers: [
    ChildrenService,
    TutorService,
  ],
  entryComponents: [
    ChildrenShowComponent,
    PhotoComponent,
  ]
})
export class ChildrenModule {
}
