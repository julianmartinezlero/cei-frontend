import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {MatSidenavModule} from '@angular/material';
import {ToolsModule} from '../tools/tools.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    ToolsModule
  ]
})
export class DashboardModule {
}
