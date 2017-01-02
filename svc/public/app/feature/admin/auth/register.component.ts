import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {DataTypeValidator} from "../../../infrastructure/validator/data-type.validator";
import {Location} from "@angular/common";
import {STATUS} from "angular-in-memory-web-api";
import "rxjs/add/operator/finally";

import {Role} from "../../../domain/user/role";
import {UserContext} from "../../../domain/user/user.context";
import {SpinnerModalService} from "../../../infrastructure/ui/spinner-modal/spinner-modal.service";
import {DialogHelperService} from "../../../infrastructure/ui/dialog-helper.service";

@Component({
    moduleId: module.id,
    templateUrl: "register.html",
    styleUrls: ["auth-form.css"]
})
export class RegisterComponent implements OnInit {
    private registerForm: FormGroup;
    private submitted: boolean = false;

    constructor(private location: Location,
                private userContext: UserContext,
                private spinnerModalService: SpinnerModalService,
                private dialog: DialogHelperService) {
    }

    ngOnInit() {
        let emailControl: FormControl = new FormControl("");
        let emailConfirmControl: FormControl = new FormControl("",
            Validators.compose([
                Validators.required,
                DataTypeValidator.match(emailControl)
            ]));
        emailControl.setValidators(Validators.compose([
            Validators.required,
            DataTypeValidator.email,
            DataTypeValidator.match(emailConfirmControl)
        ]));

        let passwordControl: FormControl = new FormControl("");
        let passwordConfirmControl: FormControl = new FormControl("",
            Validators.compose([
                Validators.required,
                DataTypeValidator.match(passwordControl)
            ]));
        passwordControl.setValidators(Validators.compose([
            Validators.required,
            DataTypeValidator.password,
            DataTypeValidator.match(passwordConfirmControl)
        ]));

        this.registerForm = new FormGroup({
            "email": emailControl,
            "emailConfirm": emailConfirmControl,
            "password": passwordControl,
            "passwordConfirm": passwordConfirmControl,
            "forename": new FormControl("",
                Validators.compose([
                    Validators.required
                ])),
            "surname": new FormControl("",
                Validators.compose([
                    Validators.required
                ])),
            "termsOfUse": new FormControl(false,
                Validators.compose([
                    Validators.requiredTrue
                ]))
        });
    }

    register() {
        this.submitted = true;

        this.registerForm.controls["email"].updateValueAndValidity();
        this.registerForm.controls["emailConfirm"].updateValueAndValidity();
        this.registerForm.controls["password"].updateValueAndValidity();
        this.registerForm.controls["passwordConfirm"].updateValueAndValidity();

        if (this.registerForm.valid) {
            this.spinnerModalService.show();
            this.submitted = false;

            this.userContext
                .register({
                    "email": this.registerForm.controls["email"].value,
                    "password": this.registerForm.controls["password"].value,
                    "forename": this.registerForm.controls["forename"].value,
                    "surname": this.registerForm.controls["surname"].value
                }, Role.USER)
                .finally(() => this.spinnerModalService.hide())
                .subscribe(
                    (sucesss) => this.dialog.success("Registration is successful.  Please check your email for activation instruction"),
                    (error) => {

                        switch (error.status) {
                            case STATUS.FORBIDDEN : {
                                this.dialog.warning("You are not authorized to use this application.  Please contact your administrator is this is incorrect.");
                                break;
                            }
                            case STATUS.CONFLICT : {
                                this.dialog.warning("This email address is already registered");
                                break;
                            }
                            default : {
                                this.dialog.error("Sorry, we are unable to process your registration at this time.  Please try again later");
                            }
                        }
                    }
                )
        }
    }

    cancel() {
        this.location.back();
    }
}
