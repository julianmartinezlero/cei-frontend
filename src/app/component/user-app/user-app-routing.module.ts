import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanelAdminComponent} from './panel-admin/panel-admin.component';
import {UserChildrenComponent} from './user-children/user-children.component';
import {TestSolvedComponent} from '../question-test/test-solved/test-solved.component';

const routes: Routes = [
  {path: '', component: PanelAdminComponent},
  {path: 'children', component: UserChildrenComponent},
  {path: 'children/test', component: TestSolvedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAppRoutingModule {
}
