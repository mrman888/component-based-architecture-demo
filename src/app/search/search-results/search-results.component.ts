import { Component, OnInit, Input } from '@angular/core';
import { SearchResultItem } from '../shared/search-result-item';
import { SelectedItemService } from 'src/app/search/shared/selected-item.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private selectedItemService: SelectedItemService) { }

  @Input()
  public searchResults: SearchResultItem[];

  ngOnInit() {
  }
  
  onSelectedItemChanged(item: SearchResultItem) {
    this.selectedItemService.setSelectedItem(item);
  }
 }
