import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChildrenListComponent} from './children-list/children-list.component';
import {TestSolvedComponent} from '../question-test/test-solved/test-solved.component';

const routes: Routes = [
  {path: 'index', component: ChildrenListComponent},
  {path: 'test', component: TestSolvedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule {
}
