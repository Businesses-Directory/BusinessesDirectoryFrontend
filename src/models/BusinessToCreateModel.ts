export class  BusinessToCreateModel {
  businessName: string;
  businessEmail?: string;
  businessTypeId: string;
  businessDescription: string;
  primaryPhoneNumber: string;
  secondaryPhoneNumber?: string;
  cityId: string;
  inFacebookAs?: string;
  inInstagramAs?: string;
  hasDelivery: boolean;
  hasCarryOut: boolean;
  hasAthMovil: boolean;
  inUberEats: boolean;
  inDameUnBite: boolean;
  inUva: boolean;
  businessHours: {
    monday: boolean;
    mondayHours?: string;
    tuesday: boolean;
    tuesdayHours?: string;
    wednesday: boolean;
    wednesdayHours?: string;
    thursday: boolean;
    thursdayHours?: string;
    friday?: boolean;
    fridayHours?: string;
    saturday: boolean;
    saturdayHours?: string;
    sunday: boolean;
    sundayHours?: string;
  };
}
