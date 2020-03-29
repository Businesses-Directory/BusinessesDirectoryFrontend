import { BusinessHours } from './busines-hours-model';
import { BusinessTypeModel } from '../types-models/business-type-model';
import { CityModel } from '../location-models/city-model';

export class BusinessToListModel {
  businessId: string = null;
  businessName: string = null;
  businessType: BusinessTypeModel;
  businessDescription: string = null;
  primaryPhoneNumber: string = null;
  secondaryPhoneNumber: string = null;
  businessDaysAndHours: BusinessHours;
  city: CityModel;
  inFacebookAs: string = null;
  inInstagramAs: string = null;
  hasDelivery = false;
  hasCarryOut = false;
  hasAthMovil = false;
  inUberEats = false;
  inDameUnBite = false;
  inUva = false;
}
