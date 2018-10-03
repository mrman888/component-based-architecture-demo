import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  public query: string;

  @Input()
  defaultQuery: string;

  @Output()
  queryChanged = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this.query = this.defaultQuery;
  }

  onFocus(event: any) {
    this.query = '';
  }

  onBlur(event: any) {
    this.query = this.defaultQuery;
  }

  onKey(event: any) { // without type info
    this.query = event.target.value;
    this.queryChanged.emit(this.query);
  }
}
