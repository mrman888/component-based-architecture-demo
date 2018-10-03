import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';
import { SearchResultComponent } from './search-results/search-result/search-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
                  SearchComponent,
                  SearchResultsComponent,
                  SearchInputComponent,
                  SearchResultComponent],
  exports: [
    SearchComponent,
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule {
}
