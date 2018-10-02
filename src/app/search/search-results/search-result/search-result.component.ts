import { Component, OnInit, Input } from '@angular/core';
import { SearchResultItem } from '../../shared/search-result-item';
import { SelectedItemService } from '../../shared/selected-item.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input()
  searchResultItem: SearchResultItem;

  constructor(private selectedItemService: SelectedItemService) { }

  ngOnInit() {
  }
  
  resultSelected() {
    this.selectedItemService.setSelectedItem(this.searchResultItem);
  }
}
