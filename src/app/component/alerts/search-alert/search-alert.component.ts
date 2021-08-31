import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search-alert',
  templateUrl: './search-alert.component.html',
  styleUrls: ['./search-alert.component.scss']
})
export class SearchAlertComponent implements OnInit, AfterViewInit {
  @Input() placeholder = '';
  @Output() cancelButton = new EventEmitter();
  @Output() searchEmitter = new EventEmitter();
  searchModel = '';
  @ViewChild('searchInput', {static: false}) searchInput: ElementRef;
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
    this.searchInput.nativeElement.addEventListener('keyup', d => {
      if (d.code === 'Escape') {
        this.cancel();
      }
    });
  }

  accept() {
    this.searchEmitter.emit(this.searchModel);
  }

  cancel() {
    this.searchModel = '';
    this.cancelButton.emit(true);
  }
}
