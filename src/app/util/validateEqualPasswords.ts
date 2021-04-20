import { FormGroup } from '@angular/forms';

export function validateEqualPasswords(controlName: string, matchingControlName: string): (formGroup: FormGroup) => void {    
    return (formGroup: FormGroup) => {        
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            matchingControl.setErrors(null);
            return;
        }

        // set error on matchingControl if validation fails
        if ((undefined === matchingControl.value) || matchingControl.value === null ||  matchingControl.value === '') {
            matchingControl.setErrors(null);
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}
