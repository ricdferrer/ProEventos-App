import { AbstractControl, FormGroup } from '@angular/forms';

export class ValidatorField {
  static MustMatch(controlName: string, matchingControlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as FormGroup;
      const contrl = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return null;
      }

      if (contrl.value !== matchingControl.value) {
        matchingControl.setErrors({
          mustMatch: true,
        });
      } else {
        matchingControl.setErrors(null)
      }
      return null;
    };
  }
}
