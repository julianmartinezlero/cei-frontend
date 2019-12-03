import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChildrenListComponent} from './children-list/children-list.component';
import {ChildrenFormComponent} from './children-form/children-form.component';
import {ChildrenShowComponent} from './childer-show/children-show.component';

const routes: Routes = [
  {path: '', component: ChildrenListComponent},
  {path: 'edit', component: ChildrenFormComponent},
  {path: 'show', component: ChildrenShowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule {
}
