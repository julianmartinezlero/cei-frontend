import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildrenListComponent} from './children-list/children-list.component';
import {ChildrenService} from './services/children.service';
import {ToolsModule} from '../tools/tools.module';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {ChildrenRoutingModule} from './children-routing.module';
import {ChildrenFormComponent} from './children-form/children-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChildrenListComponent, ChildrenFormComponent],
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
  ],
  providers: [
    ChildrenService
  ]
})
export class ChildrenModule {
}
