import { Component, OnInit, Inject } from '@angular/core';
import { BusinessService } from '../business.service';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { BusinessToCreateModel } from 'src/models/business-to-create-model';
import { ICreateBusinessData } from 'src/models/interfaces/icreate-business-data';
import { IError } from 'src/models/interfaces/ierror';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})

export class FormDialogComponent implements OnInit {
  // public phoneMask = ['(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public phoneMask = '((1(787)|(787))[\d]{3}-[\d]{4})';
  public addBusinessForm: FormGroup;

  constructor(private service: BusinessService, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: ICreateBusinessData) { }

  ngOnInit(): void {
    this.addBusinessForm = this.fb.group({
      captcha: [
        false,
        {
          validators: [
            Validators.requiredTrue
          ],
          updateOn: 'change'
        }
      ],
      businessName: [
        null,
        {
          validators: [
            Validators.required,
            Validators.maxLength(300),
            Validators.pattern('[A-Za-z0-9áéíóú,ÁÉÍÓÚüÜ@ -]{2,300}')
          ],
          updateOn: 'change'
        }
      ],
      businessEmail: [
        null,
        {
          validators: [
            Validators.required,
            Validators.maxLength(100),
            Validators.email
          ],
          updateOn: 'change'
        }
      ],
      businessDescription: [
        null,
        {
          validators: [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(600),
            Validators.pattern('[A-Za-z0-9áéíóú,.ÁÉÍÓÚüÜ -]{2,600}')
          ],
          updateOn: 'change'
        }
      ],
      primaryPhoneNumber: [
        null,
        {
          validators: [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(11),
            Validators.pattern('[0-9]{10,11}')
          ],
          updateOn: 'change'
        }
      ],
      secondaryPhoneNumber: [
        null,
        {
          validators: [
            Validators.minLength(10),
            Validators.maxLength(11),
            Validators.pattern('[0-9]{10,50}')
          ],
          updateOn: 'change'
        }
      ],
      businessTypeId: [
        '',
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      cityId: [
        '',
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      inFacebookAs: [
        null,
        {
          validators: [
            Validators.minLength(3),
            Validators.maxLength(100),
            Validators.pattern('[A-Za-z0-9_ -]{0,100}')
          ],
          updateOn: 'change'
        }
      ],
      inInstagramAs: [
        null,
        {
          validators: [
            Validators.minLength(3),
            Validators.maxLength(100),
            Validators.pattern('[A-Za-z0-9_ -]{0,100}')
          ],
          updateOn: 'change'
        }
      ],
      hasDelivery: [
        false,
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      hasCarryOut: [
        false,
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      hasAthMovil: [
        false,
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      inUberEats: [
        false,
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      inDameUnBite: [
        false,
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      inUva: [
        false,
        {
          validators: [
            Validators.required
          ],
          updateOn: 'change'
        }
      ],
      mondayHours: [
        null,
        {
          validators: [
            Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')
          ],
          updateOn: 'change'
        }
      ],
      tuesdayHours: [
        null,
        {
          validators: [
            Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')
          ],
          updateOn: 'change'
        }
      ],
      wednesdayHours: [
        null,
        {
          validators: [
            Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')
          ],
          updateOn: 'change'
        }
      ],
      thursdayHours: [
        null,
        {
          validators: [
            Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')
          ],
          updateOn: 'change'
        }
      ],
      fridayHours: [
        null,
        {
          validators: [
            Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')
          ],
          updateOn: 'change'
        }
      ],
      saturdayHours: [
        null,
        {
          validators: [
            Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')
          ],
          updateOn: 'change'
        }
      ],
      sundayHours: [
        null,
        {
          validators: [
            Validators.pattern('((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))-((1[0-2]|[1-9]):([0-5][0-9])([AP][M]))')
          ],
          updateOn: 'change'
        }
      ],
    });
  }

  public addBusiness(): void {
    if (this.mondayHours === null && this.tuesdayHours.value === null && this.wednesdayHours === null && this.thursdayHours === null
      && this.fridayHours === null && this.saturdayHours === null && this.sundayHours.value === null) {
      Swal.fire(
        {
          icon: 'error',
          title: 'Error en Horario',
          text: 'Debe realizar al menos una entrada en datos de horarios.',
          showConfirmButton: true
        }
      );
      return;
    }
    if (this.captcha.value === false) {
      Swal.fire(
        {
          icon: 'error',
          title: 'Captcha Error',
          text: 'Favor realice la verificación del captcha.',
          showConfirmButton: true
        }
      );
      return;
    }
    if (this.addBusinessForm.errors) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        showConfirmButton: true
      });
      return;
    }

    const cityInfo = this.data.cities.find(c => c.cityId === this.addBusinessForm.value.cityId);

    const businessToCreate: BusinessToCreateModel = new BusinessToCreateModel();

    businessToCreate.businessName = this.addBusinessForm.value.businessName;
    businessToCreate.businessEmail = this.addBusinessForm.value.businessEmail;
    businessToCreate.businessDescription = this.addBusinessForm.value.businessDescription;
    businessToCreate.primaryPhoneNumber = this.addBusinessForm.value.primaryPhoneNumber;
    businessToCreate.primaryPhoneNumber = this.addBusinessForm.value.primaryPhoneNumber;
    businessToCreate.businessTypeId = this.addBusinessForm.value.businessTypeId;
    businessToCreate.cityId = this.addBusinessForm.value.cityId;
    businessToCreate.stateId = cityInfo.stateId;
    businessToCreate.countryId = cityInfo.countryId;
    businessToCreate.inFacebookAs = this.addBusinessForm.value.inFacebookAs;
    businessToCreate.inInstagramAs = this.addBusinessForm.value.inInstagramAs;
    businessToCreate.hasDelivery = this.addBusinessForm.value.hasDelivery;
    businessToCreate.hasCarryOut = this.addBusinessForm.value.hasCarryOut;
    businessToCreate.hasAthMovil = this.addBusinessForm.value.hasAthMovil;
    businessToCreate.inDameUnBite = this.addBusinessForm.value.inDameUnBite;
    businessToCreate.inUberEats = this.addBusinessForm.value.inUberEats;
    businessToCreate.inUva = this.addBusinessForm.value.inUva;
    businessToCreate.businessHours.monday = this.mondayHours.value !== null ? true : false;
    businessToCreate.businessHours.mondayHours = this.mondayHours.value;
    businessToCreate.businessHours.tuesday = this.tuesdayHours.value !== null ? true : false;
    businessToCreate.businessHours.tuesdayHours = this.tuesdayHours.value;
    businessToCreate.businessHours.wednesday = this.wednesdayHours.value !== null ? true : false;
    businessToCreate.businessHours.wednesdayHours = this.wednesdayHours.value;
    businessToCreate.businessHours.thursday = this.thursdayHours.value !== null ? true : false;
    businessToCreate.businessHours.thursdayHours = this.thursdayHours.value;
    businessToCreate.businessHours.friday = this.fridayHours.value !== null ? true : false;
    businessToCreate.businessHours.fridayHours = this.fridayHours.value;
    businessToCreate.businessHours.saturday = this.saturdayHours.value !== null ? true : false;
    businessToCreate.businessHours.saturdayHours = this.saturdayHours.value;
    businessToCreate.businessHours.sunday = this.sundayHours.value !== null ? true : false;
    businessToCreate.businessHours.sundayHours = this.sundayHours.value;

    // const {
    //   hasDelivery,
    //   hasCarryOut,
    //   hasAthMovil,
    //   inUberEats,
    //   inDameUnBite,
    //   inUva,
    //   mondayHours,
    //   tuesdayHours,
    //   wednesdayHours,
    //   thursdayHours,
    //   fridayHours,
    //   saturdayHours,
    //   sundayHours
    // } = this.addBusinessForm.value;

    // const data = {
    //   ...this.addBusinessForm.value,
    //   stateId: cityInfo.stateId,
    //   countryId: cityInfo.countryId,
    //   hasDelivery: hasDelivery || false,
    //   hasCarryOut: hasCarryOut || false,
    //   hasAthMovil: hasAthMovil || false,
    //   inUberEats: inUberEats || false,
    //   inDameUnBite: inDameUnBite || false,
    //   inUva: inUva || false,
    //   businessDaysAndHours: {
    //     monday: mondayHours ? true : false,
    //     mondayHours,
    //     tuesday: tuesdayHours ? true : false,
    //     tuesdayHours,
    //     wednesday: wednesdayHours ? true : false,
    //     wednesdayHours,
    //     thursday: thursdayHours ? true : false,
    //     thursdayHours,
    //     friday: fridayHours ? true : false,
    //     fridayHours,
    //     saturday: saturdayHours ? true : false,
    //     saturdayHours,
    //     sunday: sundayHours ? true : false,
    //     sundayHours
    //   }
    // };

    this.service.addBusiness(businessToCreate).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: `${businessToCreate.businessName} fue agregado exitosamente`,
        showConfirmButton: false,
        timer: 1500
      });
    },
    (error: IError ) => {
      Swal.fire(
        {
          icon: error.type,
          title: error.title,
          text: error.detail,
          showConfirmButton: true
        }
      );
    }, () => {});
  }

  get captcha() {
    return this.addBusinessForm.get('captcha');
  }

  get businessName() {
    return this.addBusinessForm.get('businessName');
  }
  get businessEmail() {
    return this.addBusinessForm.get('businessEmail');
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

  get businessTypeId() {
    return this.addBusinessForm.get('businessTypeId');
  }

  get cityId() {
    return this.addBusinessForm.get('cityId');
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
