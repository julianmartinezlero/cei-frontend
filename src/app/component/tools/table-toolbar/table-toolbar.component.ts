import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SideNavService} from '../../../services/side-nav.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-table-toolbar',
  templateUrl: './table-toolbar.component.html',
  styleUrls: ['./table-toolbar.component.scss']
})
export class TableToolbarComponent implements OnInit {
  @Input() title = '';
  @Input() loader = false;
  @Input() onPrint = false;
  @Input() onBank = false;
  @Input() onNew = true;
  @Output() new = new EventEmitter();
  @Output() refresh = new EventEmitter();
  @Output() print = new EventEmitter();
  @Output() search = new EventEmitter();

  constructor(public sideService: SideNavService,
              private location: Location) {
  }

  ngOnInit() {
  }

  create() {
    this.new.emit(true);
  }

  fresh() {
    this.refresh.emit(true);
  }

  print_p() {
    this.print.emit(true);
  }

  keyUp(evt) {
    this.search.emit(evt);
  }

  back() {
    this.location.back();
  }
}
