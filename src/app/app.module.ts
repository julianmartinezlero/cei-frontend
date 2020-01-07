import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardModule} from './component/dashboard/dashboard.module';
import {TutorModule} from './component/tutor/tutor.module';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {ProfessionalModule} from './component/professional/professional.module';
import {ChildrenModule} from './component/children/children.module';
import {QuestionTestModule} from './component/question-test/question-test.module';
import {UserModule} from './component/user/user.module';
import {LoginModule} from './component/login/login.module';
import {AuthGuard} from './guards/auth.guard';
import {AuthLoadChildGuard} from './guards/auth-load-child.guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from './services/authInterceptor.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AdminComponent} from './component/admin/admin.component';
import {UserAppModule} from './component/user-app/user-app.module';
import {AppUserComponent} from './component/app-user/app-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AppUserComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    DashboardModule,
    TutorModule,
    ChildrenModule,
    ProfessionalModule,
    QuestionTestModule,
    UserModule,
    LoginModule,
    AppRoutingModule,
    UserAppModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es_ES'},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: true}},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    AuthGuard,
    AuthLoadChildGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
