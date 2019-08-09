import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TutorFormComponent} from './tutor-form/tutor-form.component';
import {TutorListComponent} from './tutor-list/tutor-list.component';
import {TutorService} from './services/tutor.service';
import {MatButtonModule, MatIconModule, MatSortModule, MatTableModule} from '@angular/material';
import {ToolsModule} from '../tools/tools.module';
import {TutorRoutingModule} from './tutor-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    TutorFormComponent,
    TutorListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    ToolsModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    TutorRoutingModule,
  ],
  providers: [
    TutorService
  ]
})
export class TutorModule {
}
