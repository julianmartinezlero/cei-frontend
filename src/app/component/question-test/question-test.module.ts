import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionTestRoutingModule} from './question-test-routing.module';
import {TestListComponent} from './test-list/test-list.component';
import {QuestionTestService} from './question-test.service';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatRadioModule, MatSelectModule,
  MatSortModule,
  MatTableModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {ToolsModule} from '../tools/tools.module';
import {TestFormComponent} from './test-form/test-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChildrenService} from '../children/services/children.service';
import {TutorService} from '../tutor/services/tutor.service';
import {TestSolvedComponent} from './test-solved/test-solved.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from '../../services/authInterceptor.service';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {TestSolvedResourceComponent} from './test-solved-resource/test-solved-resource.component';
import {TestAcceptComponent} from './test-accept/test-accept.component';

@NgModule({
  declarations: [TestListComponent, TestFormComponent, TestSolvedComponent, TestSolvedResourceComponent, TestAcceptComponent],
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
    FlexModule,
    GridModule
  ],
  providers: [
    QuestionTestService,
    ChildrenService,
    TutorService,
  ],
  entryComponents: [
    TestSolvedResourceComponent,
    TestAcceptComponent,
  ]
})
export class QuestionTestModule {
}
