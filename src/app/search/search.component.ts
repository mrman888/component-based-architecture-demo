import { Component, OnInit } from '@angular/core';
import { SearchResultItem } from './shared/search-result-item';
import { SearchRequest } from './shared/search-request';
import { SearchService } from './search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchRequest: SearchRequest;
  private searchResultItems: SearchResultItem[];

  constructor(private searchService: SearchService) {
    this.searchRequest = new SearchRequest();

  }

  ngOnInit() {
  }

  public onQueryChanged(query: string) {
    this.searchRequest.query = query;
    this.searchResultItems = this.searchService.search(this.searchRequest);
  }
}
