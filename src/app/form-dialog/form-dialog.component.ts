import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// import {BusinessService} from '../business.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {

  addBusinessForm: FormGroup;

  constructor(private service: BusinessService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addBusinessForm = this.fb.group({
      businessName: [
        null,
        {
          validators: [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('[A-Za-z0-9 -]{5,200}')],
          updateOn: 'change'
        }
      ],
      businessTypeId: [
        null,
        {
          validators: [Validators.required, Validators.pattern('[0-9]')],
          updateOn: 'change'
        }
      ],
      businessDescription: [
        null,
        {
          validators: [Validators.required, Validators.minLength(10), Validators.maxLength(1000)],
          updateOn: 'change'
        }
      ],
      primaryPhoneNumber: [
        null,
        {
          validators: [Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('[0-9]{10,13}')],
          updateOn: 'change'
        }
      ],
      secondaryPhoneNumber: [
        null,
        {
          validators: [Validators.minLength(10), Validators.maxLength(13), Validators.pattern('[0-9]{10,13}')],
          updateOn: 'change'
        }
      ],
      cityId: [
        null,
        {
          validators: [Validators.required, Validators.pattern('[0-9A-Za-z -]')],
          updateOn: 'change'
        }
      ],
      inFacebookAs: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[A-Za-z0-9_ -]')],
          updateOn: 'change'
        }
      ],
      inInstagramAs: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[A-Za-z0-9_ -]')],
          updateOn: 'change'
        }
      ],
      hasDelivery: [
        null,
        {
          validators: [ Validators.pattern('[0|1]{1}')],
          updateOn: 'change'
        }
      ],
      hasCarryOut: [
        null,
        {
          validators: [ Validators.pattern('[0|1]{1}')],
          updateOn: 'change'
        }
      ],
      hasAthMovil: [
        null,
        {
          validators: [ Validators.pattern('[0|1]{1}')],
          updateOn: 'change'
        }
      ],
      inUberEats: [
        null,
        {
          validators: [ Validators.pattern('[0|1]{1}')],
          updateOn: 'change'
        }
      ],
      inDameUnBite: [
        null,
        {
          validators: [ Validators.pattern('[0|1]{1}')],
          updateOn: 'change'
        }
      ],
      inUva: [
        null,
        {
          validators: [ Validators.pattern('[0|1]{1}')],
          updateOn: 'change'
        }
      ],
      mondayHours: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.pattern('[pmAP:0-9]')],
          updateOn: 'change'
        }
      ],
      tuesdayHours: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.pattern('[pmAP:0-9]')],
          updateOn: 'change'
        }
      ],
      wednesdayHours: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.pattern('[pmAP:0-9]')],
          updateOn: 'change'
        }
      ],
      thursdayHours: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.pattern('[pmAP:0-9]')],
          updateOn: 'change'
        }
      ],
      fridayHours: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.pattern('[pmAP:0-9]')],
          updateOn: 'change'
        }
      ],
      saturdayHours: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.pattern('[pmAP:0-9]')],
          updateOn: 'change'
        }
      ],
      sundayHours: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.pattern('pmAP:0-9')],
          updateOn: 'change'
        }
      ],
    });
  }

  addBusiness() {
    console.log(this.addBusinessForm);
    const {mondayHours, tuesdayHours, wednesdayHours, thursdayHours, fridayHours, saturdayHours, sundayHours} = this.addBusinessForm.value;
    const data = {
      ...this.addBusinessForm.value,
      businessHours: {
        monday: mondayHours ? true : false,
        mondayHours,
        tuesday: tuesdayHours ? true : false,
        tuesdayHours,
        wednesday: wednesdayHours ? true : false,
        wednesdayHours,
        thursday: thursdayHours ? true : false,
        thursdayHours,
        friday: fridayHours ? true : false,
        fridayHours,
        saturday: saturdayHours ? true : false,
        saturdayHours,
        sunday: sundayHours ? true : false,
        sundayHours
      }
    };

    console.log(data);

    if (this.addBusinessForm.valid) {
      this.service.addBusiness(this.addBusinessForm);
    }
  }

}
