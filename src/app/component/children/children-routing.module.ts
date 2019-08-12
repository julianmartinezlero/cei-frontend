import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChildrenListComponent} from './children-list/children-list.component';
import {ChildrenFormComponent} from './children-form/children-form.component';

const routes: Routes = [
  {path: '', component: ChildrenListComponent},
  {path: 'edit', component: ChildrenFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule {
}
