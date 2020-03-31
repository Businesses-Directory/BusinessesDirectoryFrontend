import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './search-component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {}
