import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.less']
})
export class TopHeaderComponent implements OnInit {
  @Input() isCollapsed;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onVoted = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}
  toogleEvent(val: boolean) {
    val = !val;
    this.onVoted.emit(val);
  }
}
