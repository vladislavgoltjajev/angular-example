import {AbstractControl, FormControl} from '@angular/forms';

export function isRequired(formControl: FormControl): boolean {
  if (formControl.validator) {
    const validator: any = formControl.validator({} as AbstractControl);
    if (validator && validator.required) {
      return true;
    }
  }

  if (formControl['controls']) {
    for (const controlName in formControl['controls']) {
      if (formControl['controls'].hasOwnProperty(controlName) && formControl['controls'][controlName]) {
        if (this.hasRequiredField(formControl['controls'][controlName])) {
          return true;
        }
      }
    }
  }

  return false;
}
