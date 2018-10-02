import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
    this.query = event.target.value;
    this.queryChanged.emit(this.query);
  }
}
