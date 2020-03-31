import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { MaterialModule} from './material.module';
import { BusinessService } from './business.service';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { PageLoaderModule } from 'src/shared/shared-components/page-loader/page-loader-module';
import { HeaderModule } from './app-core-modules/header-module/header-module';
import { FooterModule } from './app-core-modules/footer-module/footer-module';
import { NothingToShowModule } from 'src/shared/shared-components/nothing-to-show/nothing-to-show-module';

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
    HeaderModule,
    FooterModule,
    NothingToShowModule
  ],
  declarations: [AppComponent, FormDialogComponent],
  providers: [ProductService, BusinessService],
  bootstrap: [AppComponent],
})
export class AppModule { }
