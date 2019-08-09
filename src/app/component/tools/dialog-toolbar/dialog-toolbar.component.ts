import {Component, Input, OnInit} from '@angular/core';
import {SideNavService} from '../../../services/side-nav.service';

@Component({
  selector: 'app-dialog-toolbar',
  templateUrl: './dialog-toolbar.component.html',
  styleUrls: ['./dialog-toolbar.component.scss']
})
export class DialogToolbarComponent implements OnInit {
  @Input() title = '';
  @Input() back = false;

  constructor(private navService: SideNavService) {
  }

  ngOnInit() {
  }

  clickBack() {
    this.navService.openRight();
  }

}
