import { Component, OnInit, Input } from '@angular/core';
import { SearchResultItem } from '../shared/search-result-item';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  @Input()
  public searchResults: SearchResultItem[];

  ngOnInit() {
  }

}
