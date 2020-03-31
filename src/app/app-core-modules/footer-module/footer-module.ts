import { NgModule } from '@angular/core';
import { FooterComponent } from './footer-component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}
