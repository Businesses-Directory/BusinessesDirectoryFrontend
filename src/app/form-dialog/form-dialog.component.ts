import { Component, OnInit, Inject } from '@angular/core';
import { BusinessService } from '../business.service';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
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
          validators: [
            Validators.required,
            Validators.maxLength(200),
            Validators.pattern('[A-Za-z0-9áéíóú,ÁÉÍÓÚüÜ@ -]{2,200}')
          ],
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
    const {
      hasDelivery,
      hasCarryOut,
      hasAthMovil,
      inUberEats,
      inDameUnBite,
      inUva,
      mondayHours,
      tuesdayHours,
      wednesdayHours,
      thursdayHours,
      fridayHours,
      saturdayHours,
      sundayHours
    } = this.addBusinessForm.value;

    const data = {
      ...this.addBusinessForm.value,
      hasDelivery: hasDelivery || false,
      hasCarryOut: hasCarryOut || false,
      hasAthMovil: hasAthMovil || false,
      inUberEats: inUberEats || false,
      inDameUnBite: inDameUnBite || false,
      inUva: inUva || false,
      businessDaysAndHours: {
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

    console.log('sending: ', data);
    this.service.addBusiness(data).subscribe(res => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: `${data.businessName} fue agregado exitosamente`,
        showConfirmButton: false,
        timer: 1500
      });
    }, error => {
      console.error(error);
      Swal.fire('Encontramos un error procesando la forma. Favor de intentar nuevamente.');

    }, () => {});

    // if (this.addBusinessForm.valid) {
     // submit (run try)
    // }
  }

  get businessName() {
    return this.addBusinessForm.get('businessName');
  }
  get businessTypeId() {
    return this.addBusinessForm.get('addBusinessForm');
  }
  get cityId() {
    return this.addBusinessForm.get('cityId');
  }
  get businessDescription() {
    return this.addBusinessForm.get('businessDescription');
  }
  get primaryPhoneNumber() {
    return this.addBusinessForm.get('primaryPhoneNumber');
  }
  get secondaryPhoneNumber() {
    return this.addBusinessForm.get('secondaryPhoneNumber');
  }
  get inFacebookAs() {
    return this.addBusinessForm.get('inFacebookAs');
  }
  get inInstagramAs() {
    return this.addBusinessForm.get('inInstagramAs');
  }
  get hasDelivery() {
    return this.addBusinessForm.get('hasDelivery');
  }
  get hasCarryOut() {
    return this.addBusinessForm.get('hasCarryOut');
  }
  get hasAthMovil() {
    return this.addBusinessForm.get('hasAthMovil');
  }
  get inUberEats() {
    return this.addBusinessForm.get('inUberEats');
  }
  get inDameUnBite() {
    return this.addBusinessForm.get('inDameUnBite');
  }
  get inUva() {
    return this.addBusinessForm.get('inUva');
  }
  get businessHours() {
    return this.addBusinessForm.get('businessHours');
  }
  get monday() {
    return this.addBusinessForm.get('monday');
  }
  get mondayHours() {
    return this.addBusinessForm.get('mondayHours');
  }
  get tuesday() {
    return this.addBusinessForm.get('tuesday');
  }
  get tuesdayHours() {
    return this.addBusinessForm.get('tuesdayHours');
  }
  get wednesday() {
    return this.addBusinessForm.get('wednesday');
  }
  get wednesdayHours() {
    return this.addBusinessForm.get('wednesdayHours');
  }
  get thursday() {
    return this.addBusinessForm.get('thursday');
  }
  get thursdayHours() {
    return this.addBusinessForm.get('thursdayHours');
  }
  get friday() {
    return this.addBusinessForm.get('friday');
  }
  get fridayHours() {
    return this.addBusinessForm.get('fridayHours');
  }
  get saturday() {
    return this.addBusinessForm.get('saturday');
  }
  get saturdayHours() {
    return this.addBusinessForm.get('saturdayHours');
  }
  get sunday() {
    return this.addBusinessForm.get('sunday');
  }
  get sundayHours() {
    return this.addBusinessForm.get('sundayHours');
  }
}
