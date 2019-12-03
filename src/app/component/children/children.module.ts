import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildrenListComponent} from './children-list/children-list.component';
import {ChildrenService} from './services/children.service';
import {ToolsModule} from '../tools/tools.module';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatRippleModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {ChildrenRoutingModule} from './children-routing.module';
import {ChildrenFormComponent} from './children-form/children-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ChildrenShowComponent} from './childer-show/children-show.component';

@NgModule({
  declarations: [ChildrenListComponent, ChildrenFormComponent, ChildrenShowComponent],
  imports: [
    CommonModule,
    ToolsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    ChildrenRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [
    ChildrenService
  ]
})
export class ChildrenModule {
}
