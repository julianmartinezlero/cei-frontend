import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/dashboard/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tutor', loadChildren: () => import('./component/tutor/tutor.module').then(r => r.TutorModule)},
  {
    path: 'professional', loadChildren: () => import('./component/professional/professional.module')
      .then(r => r.ProfessionalModule)
  },
  {path: 'child', loadChildren: () => import('./component/children/children.module').then(r => r.ChildrenModule)},
  {path: 'question-test', loadChildren: () => import('./component/question-test/question-test.module').then(r => r.QuestionTestModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
