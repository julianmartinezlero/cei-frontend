import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanelAdminComponent} from './panel-admin/panel-admin.component';
import {UserChildrenComponent} from './user-children/user-children.component';

const routes: Routes = [
  {path: '', component: PanelAdminComponent},
  {path: 'children', component: UserChildrenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAppRoutingModule {
}
