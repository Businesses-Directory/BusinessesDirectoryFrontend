import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { BusinessService } from './business.service';
import { CityModel } from 'src/models/received-models/location-models/city-model';
import { CityService } from './http-services/locations-services/city-service';
import { BusinessToListModel } from 'src/models/received-models/business-models/business-to-list-model';
import { BusinessTypeModel } from 'src/models/received-models/types-models/business-type-model';
import { BusinessTypeService } from './http-services/types-services/business-type-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  public title = 'Business Directory';
  public businesses: Array<BusinessToListModel> = new Array<BusinessToListModel>();
  public cities: Array<CityModel> = new Array<CityModel>();
  public types: Array<BusinessTypeModel> = new Array<BusinessTypeModel>();
  public searchForm: FormGroup;
  public loadingContent = true;
  public firstLoad = true;
  private searchValue: string = null;
  private cityValue: string = null;
  private typeValue: string = null;

  constructor(
    private businessService: BusinessService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private cityService: CityService,
    private businessTypeService: BusinessTypeService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchControl: [null], vaditators: [Validators.pattern('[A-Za-z0-9 -]{*,200}')],
      cityControl: [''],
      businessTypeControl: ['']
    });
    this.fetchBusinesses();
  }

  ngOnDestroy(): void {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '95%';
    this.dialog.open(FormDialogComponent, dialogConfig);
  }
  /**
   * @remarks
   * This method is used to get the list of businesses in the database to be shown in the main content.
   * It uses the business service to connect to the client and retrieve the list from the database.
   *
   * @param none - This method does not receive any values.
   *
   * @returns - This is a void method, it does not returns any value.
   */
  search() {
    if (this.searchForm.valid) {
    this.fetchBusinesses(
      this.searchForm.value.searchControl,
      this.searchForm.value.cityControl,
      this.searchForm.value.businessTypeControl
    );
    } else {

    }
  }
  /**
   * @remarks
   * This method is used to get the list of businesses in the database to be shown in the main content.
   * It uses the business service to connect to the client and retrieve the list from the database.
   *
   * @param search - This param is the string entered by the user in the search field.
   * It has a null default value in the formcontrol object.
   *
   * @param city - This param is the name of the city selected by the user in the city dropdown list.
   * It has an empty string default value in the formcontrol object.
   *
   * @param type - This param is the name of the business type selected by the user in the city dropdown list.
   * It has an empty string default value in the formcontrol object.
   *
   * @returns - This is a void method, it does not returns any value.
   */
  private fetchBusinesses(search?: string, city?: string, type?: string): void {
    this.loadingContent = true;
    this.searchValue = null;
    this.cityValue = null;
    this.typeValue = null;
    if (search !== '' && search !== null && search !== undefined) {
      this.searchValue = search;
    }
    if (city !== '' && city !== null && city !== undefined) {
      this.cityValue = city;
    }
    if (type !== '' && type !== null && type !== undefined) {
      this.typeValue = type;
    }
    this.businessService.getBusinesses(this.searchValue, this.cityValue, this.typeValue).subscribe(
      response => {
        const receivedBusinesses = response.body;
        this.businesses = receivedBusinesses;
        if (this.firstLoad === true) {
          this.fetchCities();
        } else {
          this.loadingContent = false;
        }
      },
      error => {
        this.firstLoad = false;
        this.loadingContent = false;
        console.log(error);
      },
      () => {}
    );
  }
  /**
   * @remarks
   * This method is used to get the list of cities in the database to be shown in the cities dropdown list.
   * It uses the city sevice to connect to the client and retrieve the list from the database.
   *
   * @param none - This method does not receive any values.
   *
   * @returns - This is a void method, it does not returns any value.
   */
  private fetchCities(): void {
    this.cityService.getCities().subscribe(
      response => {
        const receivedCities: Array<CityModel> = response.body;
        this.cities = receivedCities;
        if (this.firstLoad === true) {
          this.fetchBusinessTypes();
        }
      },
      error => {
        this.firstLoad = false;
        this.loadingContent = false;
        console.log(error);
      },
      () => {}
    );
  }
  /**
   * @remarks
   * This method is used to get the list of business types in the database to be shown in the business types dropdown list.
   * It uses the business type sevice to connect to the client and retrieve the list from the database.
   *
   * @param none - This method does not receive any values.
   *
   * @returns - This is a void method, it does not returns any value.
   */
  private fetchBusinessTypes(): void {
    this.businessTypeService.getTypes().subscribe(
      response => {
        const receivedBusinessTypes: Array<BusinessTypeModel> = response.body;
        this.types = receivedBusinessTypes;
        this.firstLoad = false;
        this.loadingContent = false;
      },
      error => {
        this.firstLoad = false;
        this.loadingContent = false;
        console.log(error);
      },
      () => {}
    );
  }
}
