import { CityModel } from '../received-models/location-models/city-model';
import { BusinessTypeModel } from '../received-models/types-models/business-type-model';

export interface ICreateBusinessData {
  cities: Array<CityModel>;
  types: Array<BusinessTypeModel>;
}
