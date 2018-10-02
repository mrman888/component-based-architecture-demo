import { Component, OnInit, Input } from '@angular/core';
import { SearchResultItem } from '../../shared/search-result-item';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input()
  searchResultItem: SearchResultItem;

  constructor() { }

  ngOnInit() {
  }
  
  resultSelected() {
    debugger;
  }
}
