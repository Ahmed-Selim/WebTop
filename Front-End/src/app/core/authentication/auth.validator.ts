import { AbstractControl, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';

export class SignUpValidator {

    static mustMatch(c: AbstractControl) {
        const password: string = c.get('password').value ;
        const confirm: string = c.get('confirmPassword').value ;

        if (confirm !== password) {
            c.get('confirmPassword').setErrors({ missMatch: true });
        }

        return null;
    }

    static legalAge(c: AbstractControl) {
        const legal = 16 ;

        if (c.get('birthday').invalid) {
            return null ;
        }

        const birthday: Date = new Date(c.get('birthday').value) ;
        const today: Date = new Date() ;

        const yearsOld = Math.floor((today.getTime() - birthday.getTime()) / 31556952000) ;

        if (yearsOld < legal) {
            c.get('birthday').setErrors({ legalAge: true, yourAge: yearsOld });
        }

        return null;
    }
}
