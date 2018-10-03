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
  private selectedItem: SearchResultItem;

  constructor(private searchService: SearchService) {

  }

  ngOnInit() {
    this.searchRequest = new SearchRequest();
    this.searchRequest.query = 'Please enter a search term';
  }

  public onQueryChanged(query: string) {
    this.searchRequest.query = query;
    this.searchResultItems = this.searchService.search(this.searchRequest);
  }

  public onSelectedItemChanged(item: SearchResultItem) {
    this.selectedItem = item;
  }
}
