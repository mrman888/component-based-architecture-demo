import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  public query: string;

  @Output()
  queryChanged = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

  }

  onKey(event: any) { // without type info
    this.queryChanged.emit(this.query);
  }
}
