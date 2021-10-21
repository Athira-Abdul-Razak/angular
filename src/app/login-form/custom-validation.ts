import { AbstractControl } from '@angular/forms';

export function CustomValidation(control: AbstractControl) {
    if (!control.value.includes('gmail') || !control.value.includes('@') || !control.value.includes('.com')) {
        return { emailValid: true };
    }
    return null;
}