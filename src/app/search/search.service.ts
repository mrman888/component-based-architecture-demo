import { SearchResultItem } from './shared/search-result-item';
import { Injectable } from '@angular/core';
import { SearchRequest } from './shared/search-request';

@Injectable()
export class SearchService {

    public search(searchRequest: SearchRequest) {
         const searchResultItems: SearchResultItem[] = [];
         searchResultItems.push(new SearchResultItem('result 1'));
         searchResultItems.push(new SearchResultItem('result 2'));
         searchResultItems.push(new SearchResultItem('result 3'));

         return searchResultItems.filter((s) => s.description.indexOf(searchRequest.query) >= 0 );
    }
}
