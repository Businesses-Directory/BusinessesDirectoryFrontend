import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { BusinessService } from './business.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Business Directory';
  businesses$;
  searchForm: FormGroup;
  q = new FormControl(null);
  city = new FormControl(1);
  type = new FormControl('');

  constructor(private businessService: BusinessService, fb: FormBuilder, private dialog: MatDialog, private route: ActivatedRoute)
  {
    this.searchForm = fb.group({
      q: this.q,
      city: this.city,
      type: this.type
    });
  }

  ngOnInit() {
    this.fetchBusinesses();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';

    this.dialog.open(FormDialogComponent, dialogConfig);
  }

  search() {
    this.fetchBusinesses(this.searchForm.value);
  }

  fetchBusinesses(query?) {
   this.businesses$ = this.businessService.fetchBusinesses(query);
  }
}
