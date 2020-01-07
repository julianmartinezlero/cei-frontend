import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfessionalListComponent} from './professional-list/professional-list.component';
import {ProfessionalFormComponent} from './professional-form/professional-form.component';

const routes: Routes = [
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: ProfessionalListComponent},
  {path: 'create', component: ProfessionalFormComponent},
  {path: 'edit', component: ProfessionalFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule {
}
