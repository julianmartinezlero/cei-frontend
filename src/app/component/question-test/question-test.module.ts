import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionTestRoutingModule} from './question-test-routing.module';
import {TestListComponent} from './test-list/test-list.component';
import {QuestionTestService} from './question-test.service';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatRadioModule, MatSelectModule,
  MatSortModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {ToolsModule} from '../tools/tools.module';
import {TestFormComponent} from './test-form/test-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChildrenService} from '../children/services/children.service';
import {TutorService} from '../tutor/services/tutor.service';
import {TestSolvedComponent} from './test-solved/test-solved.component';

@NgModule({
  declarations: [TestListComponent, TestFormComponent, TestSolvedComponent],
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
    MatRadioModule
  ],
  providers: [
    QuestionTestService,
    ChildrenService,
    TutorService
  ]
})
export class QuestionTestModule {
}
