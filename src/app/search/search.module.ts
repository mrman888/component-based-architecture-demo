import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { SearchService } from './search.service';
import { SearchResultComponent } from './search-results/search-result/search-result.component';
import { SearchSharedModule } from './shared/search-shared.module';
import { SelectedItemService } from './shared/selected-item.service';
import { SearchRoutingModule } from './search-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SearchSharedModule,
    SearchRoutingModule
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
    SearchService,
    SelectedItemService
  ]
})
export class SearchModule {
}
