import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupChildren} from '../../../interfaces/models/child.model';
import {DEFAULT_PICTURE} from '../../../config/appearance.config';

@Component({
  selector: 'app-group-children',
  templateUrl: './group-children.component.html',
  styleUrls: ['./group-children.component.scss']
})
export class GroupChildrenComponent implements OnInit {
  @Input() groupChildren: GroupChildren[] = [];
  @Output() showBtn = new EventEmitter();
  @Output() printFileBtn = new EventEmitter();
  @Output() testBtn = new EventEmitter();
  @Output() viewBtn = new EventEmitter();
  defaultPhoto = DEFAULT_PICTURE;

  constructor() { }

  ngOnInit() {
  }

  show(child: any) {
    this.showBtn.emit(child);
  }

  printFile(child: any) {
    this.printFileBtn.emit(child);
  }

  createTest(child: any) {
    this.testBtn.emit(child);
  }

  setView() {
    this.viewBtn.emit(true);
  }
}
