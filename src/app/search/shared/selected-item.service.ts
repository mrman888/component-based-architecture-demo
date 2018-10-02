import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchResultItem } from './search-result-item';
import { filter } from 'rxjs/operators';

@Injectable()
export class SelectedItemService {

  private selectedItem: BehaviorSubject<SearchResultItem> = new BehaviorSubject(null);
  public selectedItem$ = this.selectedItem.asObservable().pipe(filter(Boolean));
  constructor() { }

  public setSelectedItem(item: SearchResultItem) {
    this.selectedItem.next(item);
  }
}
