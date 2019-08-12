import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {MatSidenavModule} from '@angular/material';
import {ToolsModule} from '../tools/tools.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
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
