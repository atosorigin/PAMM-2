import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {DataTypeValidator} from "../../../lib/validator/data-type.validator";
import {Location} from "@angular/common";

@Component({
    moduleId: module.id,
    templateUrl: "register.html",
    styleUrls: ["auth-form.css"]
})

export class RegisterComponent implements OnInit {
    private registerForm: FormGroup;
    private submitted: boolean = false;

    constructor(private location: Location) {
    }

    ngOnInit() {
        let emailControl: FormControl = new FormControl("",
            Validators.compose([
                Validators.required,
                DataTypeValidator.email,
            ]));

        let passwordControl: FormControl = new FormControl("",
            Validators.compose([
                Validators.required,
                DataTypeValidator.password,
            ]));

        this.registerForm = new FormGroup({
            "email": emailControl,
            "emailConfirm": new FormControl("",
                Validators.compose([
                    Validators.required,
                    DataTypeValidator.match(emailControl)
                ])),
            "password": new FormControl("",
                Validators.compose([
                    Validators.required,
                    DataTypeValidator.password
                ])),
            "passwordConfirm": new FormControl("",
                Validators.compose([
                    Validators.required,
                    DataTypeValidator.match(passwordControl)
                ])),
            "forename": new FormControl("",
                Validators.compose([
                    Validators.required
                ])),
            "surname": new FormControl("",
                Validators.compose([
                    Validators.required
                ])),
            "termsOfUse": new FormControl("",
                Validators.compose([
                    Validators.required
                ]))
        });
    }

    register() {
        this.submitted = true;

        if (this.registerForm.valid) {
            //this.spinnerModalService.show();
            this.submitted = false;

            //this.userContext.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value, Role.USER)
            //    .subscribe(
            //        (user: User) => this.router.navigate(["/user"]),
            //        (error: DataAccessError) => {
            //            this.spinnerModalService.hide();
            //            if (error === DataAccessError.UNAUTHORIZED) {
            //                this.hasAuthenticationError = true;
            //            } else {
            //            }
            //        },
            //        () => this.spinnerModalService.hide()
            //    )
        }
    }

    cancel() {
        this.location.back();
    }
}
