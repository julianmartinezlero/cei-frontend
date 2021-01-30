import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {MatButtonModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {ToolsModule} from '../tools/tools.module';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material';

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
    ToolsModule,
    MatTabsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DashboardModule {
}
