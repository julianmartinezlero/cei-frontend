import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestListComponent} from './test-list/test-list.component';
import {TestFormComponent} from './test-form/test-form.component';
import {TestSolvedComponent} from './test-solved/test-solved.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: TestListComponent},
  {path: 'create', component: TestFormComponent},
  {path: ':id/solved', component: TestSolvedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionTestRoutingModule {
}
