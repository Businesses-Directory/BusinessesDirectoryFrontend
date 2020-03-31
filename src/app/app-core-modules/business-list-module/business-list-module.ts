import { NgModule } from '@angular/core';
import { SearchComponent } from '../search-module/search-component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {}
