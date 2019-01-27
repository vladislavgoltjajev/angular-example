import {GeoData} from './geo-data';

export interface Address {

  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoData;
}
