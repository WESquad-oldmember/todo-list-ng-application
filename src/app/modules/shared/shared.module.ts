import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  imports: [
    // Angular
    ReactiveFormsModule,
    CommonModule,

    // Angular Material
    MaterialModule,
  ],
  exports: [
    ReactiveFormsModule,

    // Angular Material
    MaterialModule,
  ]
})
export class SharedModule { }
