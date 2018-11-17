import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form.component';
import { RegistrationFormRoutingModule } from './registration-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegistrationFormRoutingModule
  ],
  declarations: [RegistrationFormComponent],
  exports: [
    RegistrationFormComponent,
  ],
})
export class RegistrationFormModule { }
