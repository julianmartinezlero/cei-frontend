import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelAdminComponent} from './panel-admin/panel-admin.component';
import {UserAppRoutingModule} from './user-app-routing.module';
import {ToolsModule} from '../tools/tools.module';
import {UserChildrenComponent} from './user-children/user-children.component';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {ChildrenService} from '../children/services/children.service';
import {ChildrenFormComponent} from '../children/children-form/children-form.component';
import {ChildrenModule} from '../children/children.module';
import {TestSolvedComponent} from '../question-test/test-solved/test-solved.component';
import {QuestionTestModule} from '../question-test/question-test.module';

@NgModule({
  declarations: [
    PanelAdminComponent,
    UserChildrenComponent,
  ],
  imports: [
    CommonModule,
    ToolsModule,
    ChildrenModule,
    QuestionTestModule,
    UserAppRoutingModule,
    FlexModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [
    ChildrenService,
  ],
  entryComponents: [
    ChildrenFormComponent,
    TestSolvedComponent,
  ]
})
export class UserAppModule {
}
