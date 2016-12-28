import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import "rxjs/add/operator/finally";
import {SpinnerModalService} from "../../../infrastructure/ui/spinner-modal/spinner-modal.service";
import {AuditService} from "../../../infrastructure/audit.service";
import {DialogHelperService} from "../../../infrastructure/ui/dialog-helper.service";
import {DataTypeValidator} from "../../../infrastructure/validator/data-type.validator";
import {UserContext} from "../../../domain/context/user.context";
import {Role} from "../../../domain/context/role";
import {Response} from "@angular/http";

@Component({
    moduleId: module.id,
    templateUrl: "forgotten-password.html",
    styles: [`
        form {
            border-top: 1px solid lightgray;
            margin-top: 10px;
            padding-top: 5px;
        }`],
    styleUrls: ["auth-form.css"]
})
export class ForgottenPasswordComponent implements OnInit {

    private forgottenPasswordForm: FormGroup;
    private submitted: boolean = false;

    constructor(private userContext: UserContext,
                private location: Location,
                private spinnerModalService: SpinnerModalService,
                private dialog: DialogHelperService,
                private log: AuditService) {
    }

    ngOnInit() {
        this.forgottenPasswordForm = new FormGroup({
            "email": new FormControl("", Validators.compose([Validators.required, DataTypeValidator.email]))
        });
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
                        this.dialog.success("Password request have been successfully been submited.  Please check your email for reset instruction.");
                    },
                    (error: Response) => {
                        this.dialog.error("Service temporarily unavailable. Please try again later");
                        this.log.error(`Unable to log on becuase ${error.text()}`);
                    }
                )
        }
    }

    cancel() {
        this.location.back();
    }
}
