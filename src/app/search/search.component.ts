import { Component, OnInit } from '@angular/core';
import { SearchResultItem } from './shared/search-result-item';
import { SearchRequest } from './shared/search-request';
import { SearchService } from './search.service';
import { SelectedItemService } from './shared/selected-item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchRequest: SearchRequest;
  private searchResultItems: SearchResultItem[];

  private selectedSearchItem: SearchResultItem;

  constructor(private searchService: SearchService, private selectedItemService: SelectedItemService) {
    this.searchRequest = new SearchRequest();

  }

  ngOnInit() {
    this.selectedItemService.selectedItem$.subscribe((item: SearchResultItem) => {
      this.selectedSearchItem = item;
    });
  }

  public onQueryChanged(query: string) {
    this.searchRequest.query = query;
    this.searchResultItems = this.searchService.search(this.searchRequest);
  }
}
