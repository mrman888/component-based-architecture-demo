import { SearchResultItem } from './shared/search-result-item';
import { Injectable } from '@angular/core';
import { SearchRequest } from './shared/search-request';

@Injectable()
export class SearchService {

    public search(searchRequest: SearchRequest) {
         const searchResultItems: SearchResultItem[] = [];
         searchResultItems.push(new SearchResultItem('Bart'));
         searchResultItems.push(new SearchResultItem('Homer'));
         searchResultItems.push(new SearchResultItem('Marge'));
         searchResultItems.push(new SearchResultItem('Lisa'));
         searchResultItems.push(new SearchResultItem('Maggie'));

         return searchResultItems.filter((s) => s.description.indexOf(searchRequest.query) >= 0 );
    }
}
