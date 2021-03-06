import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {STATUS} from "angular-in-memory-web-api";
import "rxjs/add/operator/finally";
import {DataTypeValidator} from "../../../infrastructure/validator/data-type.validator";
import {UserContext} from "../../../domain/user/user.context";
import {SpinnerModalService} from "../../../infrastructure/ui/spinner-modal/spinner-modal.service";
import {DialogHelperService} from "../../../infrastructure/ui/dialog-helper.service";
import {AuditService} from "../../../infrastructure/util/audit.service";
import {Response} from "@angular/http";

@Component({
    moduleId: module.id,
    templateUrl: "reset-password.html",
    styleUrls: ["auth-form.css"]
})
export class ResetPasswordComponent implements OnInit {

    private hasAuthenticationError: boolean = false;
    private resetPasswordForm: FormGroup;
    private submitted: boolean = false;
    private token: string;

    constructor(private userContext: UserContext,
                private spinnerModalService: SpinnerModalService,
                private dialog: DialogHelperService,
                private route: ActivatedRoute,
                private router: Router,
                private audit: AuditService) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params["token"])
            .subscribe(token => this.token = token);

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

        this.resetPasswordForm = new FormGroup({
            "password": passwordControl,
            "passwordConfirm": passwordConfirmControl,
            "verificationCode": new FormControl("", Validators.compose([Validators.required]))
        });
    }

    resetPassword() {
        this.submitted = true;
        this.hasAuthenticationError = false;

        this.resetPasswordForm.controls["password"].updateValueAndValidity();
        this.resetPasswordForm.controls["passwordConfirm"].updateValueAndValidity();

        if (this.resetPasswordForm.valid) {
            this.spinnerModalService.show();
            this.submitted = false;

            this.userContext
                .resetPassword(
                    this.resetPasswordForm.controls["verificationCode"].value,
                    this.resetPasswordForm.controls["password"].value,
                    this.token
                )
                .finally(() => this.spinnerModalService.hide())
                .subscribe(
                    sucesss => {
                        this.dialog.success("Your password has been reset. You can now login with your new password.");
                        this.router.navigateByUrl("/user/auth/login");
                    },
                    (error:Response) => {
                        if (error.status === STATUS.UNAUTHORIZED) {
                            this.hasAuthenticationError = true;
                        } else {
                            this.dialog.error("Sorry, we are unable to reset your password at this time.  Please try again later.");
                            this.audit.error(`resetPassword:: Unable to reset password because of ${error.status} - ${error.statusText}`)
                        }
                    }
                )
        }
    }
}
