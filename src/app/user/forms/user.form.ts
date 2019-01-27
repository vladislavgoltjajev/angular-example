import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../interfaces/user/user';
import {FormContainer} from '../../shared/interfaces/form-container';

export class UserForm implements FormContainer {

  form: FormGroup;
  errorMessages: object = {
    name: {
      required: 'Name is required'
    },
    username: {
      required: 'Username is required'
    },
    email: {
      required: 'Email is required'
    },
    phone: {
      required: 'Phone is required'
    },
    website: {
      required: 'Website is required'
    },
    address: {
      street: {
        required: 'Street is required'
      },
      suite: {
        required: 'Suite is required'
      },
      city: {
        required: 'City is required'
      },
      zipcode: {
        required: 'ZIP code is required'
      },
      geo: {
        lat: {
          required: 'Latitude is required'
        },
        lng: {
          required: 'Longitude is required'
        }
      }
    },
    company: {
      name: {
        required: 'Company name is required'
      },
      catchPhrase: {
        required: 'Company catchphrase is required'
      },
      bs: {
        required: 'Company business strategy is required'
      }
    }
  };

  constructor(user?: User) {
    this.form = new FormGroup({
      name: new FormControl(user ? user.name : '', {validators: Validators.required}),
      username: new FormControl(user ? user.username : '', {validators: Validators.required}),
      email: new FormControl(user ? user.email : '', {validators: Validators.required}),
      phone: new FormControl(user ? user.phone : '', {validators: Validators.required}),
      website: new FormControl(user ? user.website : '', {validators: Validators.required}),
      address: new FormGroup({
        street: new FormControl(user ? user.address.street : '', {validators: Validators.required}),
        suite: new FormControl(user ? user.address.suite : '', {validators: Validators.required}),
        city: new FormControl(user ? user.address.city : '', {validators: Validators.required}),
        zipcode: new FormControl(user ? user.address.zipcode : '', {validators: Validators.required}),
        geo: new FormGroup({
          lat: new FormControl(user ? user.address.geo.lat : '', {validators: Validators.required}),
          lng: new FormControl(user ? user.address.geo.lng : '', {validators: Validators.required}),
        }),
      }),
      company: new FormGroup({
        name: new FormControl(user ? user.company.name : '', {validators: Validators.required}),
        catchPhrase: new FormControl(user ? user.company.catchPhrase : '', {validators: Validators.required}),
        bs: new FormControl(user ? user.company.bs : '', {validators: Validators.required}),
      })
    });
  }
}
