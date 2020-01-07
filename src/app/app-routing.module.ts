import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/dashboard/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminComponent} from './component/admin/admin.component';
import {PanelAdminComponent} from './component/user-app/panel-admin/panel-admin.component';
import {AppUserComponent} from './component/app-user/app-user.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
      {
        path: 'tutor', canActivate: [AuthGuard],
        loadChildren: () => import('./component/tutor/tutor.module').then(r => r.TutorModule)
      },
      {
        path: 'professional', canActivate: [AuthGuard],
        loadChildren: () => import('./component/professional/professional.module').then(r => r.ProfessionalModule)
      },
      {
        path: 'child', canActivate: [AuthGuard],
        loadChildren: () => import('./component/children/children.module').then(r => r.ChildrenModule)
      },
      {
        path: 'question-test', canActivate: [AuthGuard],
        loadChildren: () => import('./component/question-test/question-test.module').then(r => r.QuestionTestModule)
      },
    ]
  },
  {path: 'login', loadChildren: () => import('./component/login/login.module').then(r => r.LoginModule)},
  {
    path: 'app', component: AppUserComponent,
    loadChildren: () => import('./component/user-app/user-app.module').then(r => r.UserAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
