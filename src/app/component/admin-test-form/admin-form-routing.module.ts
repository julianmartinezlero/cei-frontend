import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UpdateFormComponent} from './update-form/update-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: UpdateFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminFormRoutingModule {
}
