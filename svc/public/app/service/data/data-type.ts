import {FormControl} from "@angular/forms";

export class DataType {
    static email(control: FormControl) {
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

    static password(control: FormControl) {
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
}