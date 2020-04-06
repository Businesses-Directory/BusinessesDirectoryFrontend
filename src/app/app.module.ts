import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { MaterialModule } from './material.module';
import { BusinessService } from './business.service';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { PageLoaderModule } from 'src/shared/page-loader/page-loader-module';


@NgModule({
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
    FormsModule,
    // TextMaskModule
    // NgxMaskModule
  ],
  declarations: [
    AppComponent,
    FormDialogComponent
  ],
  providers: [
    ProductService,
    BusinessService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
