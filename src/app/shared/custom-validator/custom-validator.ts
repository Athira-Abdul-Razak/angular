import { AbstractControl } from '@angular/forms';
export class CustomValidation {
    static emailValidator(control: AbstractControl) {
        if (control.value) {
            const matches = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{3}/);
            return matches ? null : { 'invalidEmail': true };
        }
         else {
            return null;
        }
    }

    static noWhiteSpace(control: AbstractControl) {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { invalidUserName: true };
        }
        else {
            return null;
        }
    }
}