import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/dashboard/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {AdminComponent} from './component/admin/admin.component';
import {AppUserComponent} from './component/app-user/app-user.component';
import {AuthLoadChildGuard} from './guards/auth-load-child.guard';
import {UserAdminLoadGuard} from './guards/user-admin-load.guard';
import {UserAppLoadGuard} from './guards/user-app-load.guard';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
      {
        path: 'tutor', canLoad: [UserAdminLoadGuard],
        loadChildren: () => import('./component/tutor/tutor.module').then(r => r.TutorModule)
      },
      {
        path: 'professional', canLoad: [UserAdminLoadGuard],
        loadChildren: () => import('./component/professional/professional.module').then(r => r.ProfessionalModule)
      },
      {
        path: 'child', canLoad: [UserAdminLoadGuard],
        loadChildren: () => import('./component/children/children.module').then(r => r.ChildrenModule)
      },
      {
        path: 'question-test', canLoad: [UserAdminLoadGuard],
        loadChildren: () => import('./component/question-test/question-test.module').then(r => r.QuestionTestModule)
      },
      {
        path: 'form', canLoad: [UserAdminLoadGuard],
        loadChildren: () => import('./component/admin-test-form/admin-test-form.module').then(r => r.AdminTestFormModule)
      },
    ]
  },
  {path: 'login', canLoad: [AuthLoadChildGuard], loadChildren: () => import('./component/login/login.module').then(r => r.LoginModule)},
  {
    path: 'app', component: AppUserComponent, canLoad: [UserAppLoadGuard],
    loadChildren: () => import('./component/user-app/user-app.module').then(r => r.UserAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
