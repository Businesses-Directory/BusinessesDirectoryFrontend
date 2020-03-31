import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NothingToShowComponent } from './nothing-to-show-component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NothingToShowComponent],
  exports: [NothingToShowComponent]
})
export class NothingToShowModule {}
