import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorListComponent} from './tutor-list/tutor-list.component';
import {TutorFormComponent} from './tutor-form/tutor-form.component';
import {TutorEditComponent} from './tutor-edit/tutor-edit.component';

const routes: Routes = [
  // {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'index', component: TutorListComponent},
  {path: 'create', component: TutorFormComponent},
  {path: 'edit', component: TutorEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule {
}
