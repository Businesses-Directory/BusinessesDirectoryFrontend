import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

import {ProductService} from './product.service';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular';
  products$;
  form: FormGroup;
  name = new FormControl("", Validators.required);
  price = new FormControl(0.00, Validators.required);
  category = new FormControl("Electronics", Validators.required);
  qty = new FormControl(0, Validators.required);
  dataPoints:any= [];
  chart:any;

  constructor(private productService: ProductService, fb: FormBuilder, private dialog: MatDialog)
  {
    this.form = fb.group({
      "name": this.name,
      "price":this.price,
      "category": this.category,
      "qty": this.qty
    });
  }


  ngOnInit() {
    this.fetchProducts();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';

    this.dialog.open(FormDialogComponent, dialogConfig);
  }


  fetchProducts() {
   this.products$ = this.productService.fetchProducts();
  }

  editProduct(product) {

    const newName = prompt('Enter a new name for the product', product.name);
    console.log(newName);

    if (newName == null || newName == "") {
      alert('Canceled');
      return;
    }

    this.productService.updateProduct(newName, product.id);
    //console.log(product);
  }

  addProduct() {
  this.productService.addProduct(this.form.value).subscribe(res => console.log(res));
    //console.log(demo);
  }

  deleteProduct(product) {
    const c = confirm('Are you sure you want to delete ' + product.name + ' with a product ID of ' + product.id +'?');
    if (c) {
      this.products$ = this.productService.deleteProduct(product.id);
      alert('Deleted');
      return;
    }
    alert('Canceled');
  }
}
