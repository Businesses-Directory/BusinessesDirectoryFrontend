import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageLoaderComponent } from './page-loader-component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [PageLoaderComponent],
  exports: [PageLoaderComponent]
})
export class PageLoaderModule {}
