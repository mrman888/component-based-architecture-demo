import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedItemService } from './selected-item.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})
export class SearchSharedModule {
  /* static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchSharedModule,
      providers: [SelectedItemService]
    };
  } */
}

