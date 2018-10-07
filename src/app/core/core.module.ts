import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      NavigationComponent, 
      LoadSpinnerComponent
  ],
  exports: [
    NavigationComponent,
    LoadSpinnerComponent
  ]
})
export class CoreModule { }
