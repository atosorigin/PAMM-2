import {FormControl, FormGroup} from "@angular/forms";

export class DataTypeValidator {
    static email(control: FormControl): {[p: string]: any} {
        if (control.value.trim().length === 0) {
            return null;
        }

        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(control.value) ? null : {
                email: {
                    valid: false
                }
            };
    }

    static password(control: FormControl): {[p: string]: any} {
        if (control.value.trim().length === 0) {
            return null;
        }

        const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-zA-Z]).{8,255}$/;
        return PASSWORD_REGEXP.test(control.value) ? null : {
                password: {
                    valid: false
                }
            };
    }

    static match(valueToMatch: FormControl) {
        return (confirm: FormControl): {[p: string]: any} => {
            if (confirm.value.trim().length === 0) {
                return null;
            }

            return (valueToMatch.value === confirm.value) ? null : {
                    match: {valid: false}
                };
        }
    }
}
