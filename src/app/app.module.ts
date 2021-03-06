import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import {MaterialModule} from './material.module';
import { BusinessService } from './business.service';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { PageLoaderModule } from 'src/shared/page-loader/page-loader-module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    FormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    PageLoaderModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ProductService, BusinessService],
  bootstrap: [AppComponent],
})


export class AppModule { }
