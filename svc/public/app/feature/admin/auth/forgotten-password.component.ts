import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import "rxjs/add/operator/finally";
import {STATUS} from "angular-in-memory-web-api";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {SpinnerModalService} from "../../../infrastructure/ui/spinner-modal/spinner-modal.service";
import {AuditService} from "../../../infrastructure/audit.service";
import {DialogHelperService} from "../../../infrastructure/ui/dialog-helper.service";
import {DataTypeValidator} from "../../../infrastructure/validator/data-type.validator";
import {UserContext} from "../../../domain/context/user.context";
import {Role} from "../../../domain/context/role";

@Component({
    moduleId: module.id,
    templateUrl: "forgotten-password.html",
    styleUrls: ["auth-form.css"]
})
export class ForgottenPasswordComponent implements OnInit, OnDestroy {

    private forgottenPasswordForm: FormGroup;
    private submitted: boolean = false;
    private invalidAccount: boolean = false;
    private emailSubscription: Subscription;

    constructor(private userContext: UserContext,
                private location: Location,
                private spinnerModalService: SpinnerModalService,
                private dialog: DialogHelperService,
                private router: Router,
                private log: AuditService) {
    }

    ngOnInit() {
        this.forgottenPasswordForm = new FormGroup({
            "email": new FormControl("", Validators.compose([Validators.required, DataTypeValidator.email]))
        });

        // watch email value changes to avoid to showing not valid email message after change
        this.emailSubscription = this.forgottenPasswordForm.controls["email"].valueChanges
            .subscribe(() => this.invalidAccount = false)
    }

    ngOnDestroy() {
        this.emailSubscription.unsubscribe();
    }

    requestReset() {
        this.submitted = true;

        if (this.forgottenPasswordForm.valid) {
            this.spinnerModalService.show();
            this.submitted = false;

            this.userContext.requestPasswordReset(this.forgottenPasswordForm.controls["email"].value, Role.USER)
                .finally(() => this.spinnerModalService.hide())
                .subscribe(
                    () => {
                        this.dialog.success("Password request have been successfully been submitted.  Please check your email for reset instruction.")
                            .then(() => this.router.navigateByUrl("/user/auth/login"))
                    },
                    (error) => {
                        if (error.status === STATUS.BAD_REQUEST) {
                            this.invalidAccount = true;
                        } else {
                            this.dialog.error("Sorry, we are unable to reset your password at this time.  Please try again later.");
                        }
                    }
                )
        }
    }

    cancel() {
        this.location.back();
    }
}
