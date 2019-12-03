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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DashboardModule,
    TutorModule,
    ChildrenModule,
    ProfessionalModule,
    QuestionTestModule,
    AppRoutingModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es_ES'},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: false}},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
