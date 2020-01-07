import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessionalListComponent} from './professional-list/professional-list.component';
import {ProfessionalFormComponent} from './professional-form/professional-form.component';
import {ProfessionalService} from './services/professional.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {ToolsModule} from '../tools/tools.module';
import {AlertsModule} from '../alerts/alerts.module';
import {ProfessionalRoutingModule} from './professional-routing.module';

@NgModule({
  declarations: [
    ProfessionalListComponent,
    ProfessionalFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    ToolsModule,
    AlertsModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    ProfessionalRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatListModule,
  ],
  providers: [
    ProfessionalService
  ]
})
export class ProfessionalModule {
}
