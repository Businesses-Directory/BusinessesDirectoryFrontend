import { Component, OnInit, Inject } from '@angular/core';
import { BusinessService } from '../business.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';

// import {BusinessService} from '../business.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})

export class FormDialogComponent implements OnInit {

  addBusinessForm: FormGroup;

  constructor(private service: BusinessService, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.addBusinessForm = this.fb.group({
      captcha: [null, {validators: [Validators.required], updateOn: 'change'}],
      businessName: [
        null,
        {
          validators: [Validators.required, Validators.minLength(5), Validators.maxLength(200), Validators.pattern('[A-Za-z0-9 -]{5,200}')],
          updateOn: 'change'
        }
      ],
      businessTypeId: [
        '',
        {
          validators: [Validators.required],
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
        '',
        {
          validators: [Validators.required],
          updateOn: 'change'
        }
      ],
      inFacebookAs: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[A-Za-z0-9_ -]{0,100}')],
          updateOn: 'change'
        }
      ],
      inInstagramAs: [
        null,
        {
          validators: [ Validators.minLength(3), Validators.maxLength(100), Validators.pattern('[A-Za-z0-9_ -]{0,100}')],
          updateOn: 'change'
        }
      ],
      hasDelivery: [
        null,
        {
          validators: [ Validators.requiredTrue],
          updateOn: 'change'
        }
      ],
      hasCarryOut: [
        null,
        {
          validators: [ Validators.requiredTrue],
          updateOn: 'change'
        }
      ],
      hasAthMovil: [
        null,
        {
          validators: [ Validators.requiredTrue],
          updateOn: 'change'
        }
      ],
      inUberEats: [
        null,
        {
          validators: [ Validators.requiredTrue],
          updateOn: 'change'
        }
      ],
      inDameUnBite: [
        null,
        {
          validators: [Validators.requiredTrue],
          updateOn: 'change'
        }
      ],
      inUva: [
        null,
        {
          validators: [Validators.requiredTrue],
          updateOn: 'change'
        }
      ],
      mondayHours: [
        null,
        {
          validators: [  Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')],
          updateOn: 'change'
        }
      ],
      tuesdayHours: [
        null,
        {
          validators: [  Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')],
          updateOn: 'change'
        }
      ],
      wednesdayHours: [
        null,
        {
          validators: [  Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')],
          updateOn: 'change'
        }
      ],
      thursdayHours: [
        null,
        {
          validators: [  Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')],
          updateOn: 'change'
        }
      ],
      fridayHours: [
        null,
        {
          validators: [  Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')],
          updateOn: 'change'
        }
      ],
      saturdayHours: [
        null,
        {
          validators: [  Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')],
          updateOn: 'change'
        }
      ],
      sundayHours: [
        null,
        {
          validators: [  Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')],
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

    // if (this.addBusinessForm.valid) {
      if (this.service.addBusiness(this.addBusinessForm)) {
        Swal.fire({
          icon: 'success',
          title: 'Su negocio fue creado exitosamente',
          showConfirmButton: false,
          timer: 1500
        })

      } else {
        Swal.fire('Encontramos un error procesando la forma. Favor de intentar nuevamente.');
      }
    // }
  }

}
