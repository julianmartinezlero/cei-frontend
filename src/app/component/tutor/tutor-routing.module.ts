import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorListComponent} from './tutor-list/tutor-list.component';
import {TutorFormComponent} from './tutor-form/tutor-form.component';

const routes: Routes = [
  {path: '', component: TutorListComponent},
  {path: 'create', component: TutorFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule {
}
