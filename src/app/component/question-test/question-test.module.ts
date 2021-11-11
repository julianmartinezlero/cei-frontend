import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionTestRoutingModule} from './question-test-routing.module';
import {TestListComponent} from './test-list/test-list.component';
import {QuestionTestService} from './question-test.service';
import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule, MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {ToolsModule} from '../tools/tools.module';
import {TestFormComponent} from './test-form/test-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChildrenService} from '../children/services/children.service';
import {TutorService} from '../tutor/services/tutor.service';
import {TestSolvedComponent} from './test-solved/test-solved.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {TestSolvedResourceComponent} from './test-solved-resource/test-solved-resource.component';
import {TestAcceptComponent} from './test-accept/test-accept.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {TestSolvedResultComponent} from './test-solved-result/test-solved-result.component';
import {TreatmentService} from './treatment.service';
import { TestUploadResourceComponent } from './test-upload-resource/test-upload-resource.component';
import { TestShowResultComponent } from './test-show-result/test-show-result.component';

@NgModule({
  declarations: [
    TestListComponent,
    TestFormComponent,
    TestSolvedComponent,
    TestSolvedResourceComponent,
    TestAcceptComponent,
    TestSolvedResultComponent,
    TestUploadResourceComponent,
    TestShowResultComponent
  ],
    imports: [
        CommonModule,
        QuestionTestRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatTableModule,
        ToolsModule,
        MatSortModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatTooltipModule,
        MatRadioModule,
        MatListModule,
        MatDialogModule,
        MatMenuModule,
        MatToolbarModule,
        MatCarouselModule.forRoot(),
        FlexModule,
        GridModule,
        MatRippleModule
    ],
  providers: [
    QuestionTestService,
    TreatmentService,
    ChildrenService,
    TutorService,
  ],
  entryComponents: [
    TestSolvedResourceComponent,
    TestAcceptComponent,
    TestUploadResourceComponent,
    TestShowResultComponent,
  ],
  exports: [
    TestSolvedComponent,
    TestSolvedResultComponent,
    TestSolvedResourceComponent
  ]
})
export class QuestionTestModule {
}
