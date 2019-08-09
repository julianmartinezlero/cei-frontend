import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelNavigationComponent} from './panel-navigation/panel-navigation.component';
import {TableToolbarComponent} from './table-toolbar/table-toolbar.component';
import {DialogToolbarComponent} from './dialog-toolbar/dialog-toolbar.component';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    PanelNavigationComponent,
    TableToolbarComponent,
    DialogToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule,
    MatProgressBarModule,
  ],
  exports: [
    PanelNavigationComponent,
    TableToolbarComponent,
    DialogToolbarComponent
  ]
})
export class ToolsModule {
}
