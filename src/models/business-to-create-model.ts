import { BusinessHoursToCreateModel } from './business-hous-to-create-model';

export class  BusinessToCreateModel {
  businessName: string = null;
  businessEmail: string = null;
  businessTypeId: string = null;
  businessDescription: string = null;
  primaryPhoneNumber: string = null;
  secondaryPhoneNumber?: string = null;
  cityId: string = null;
  stateId: string = null;
  countryId: string = null;
  inFacebookAs?: string = null;
  inInstagramAs?: string = null;
  hasDelivery = false;
  hasCarryOut = false;
  hasAthMovil = false;
  inUberEats = false;
  inDameUnBite = false;
  inUva = false;
  businessHours: BusinessHoursToCreateModel = new BusinessHoursToCreateModel();
}
