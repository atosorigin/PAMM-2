import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {STATUS} from "angular-in-memory-web-api";
import "rxjs/add/operator/finally";

import {SpinnerModalService} from "../../../infrastructure/ui/spinner-modal/spinner-modal.service";
import {AuditService} from "../../../infrastructure/util/audit.service";
import {DialogHelperService} from "../../../infrastructure/ui/dialog-helper.service";
import {DataTypeValidator} from "../../../infrastructure/validator/data-type.validator";

import {UserContext} from "../../../domain/user/user.context";
import {Role} from "../../../domain/user/role";

@Component({
    moduleId: module.id,
    templateUrl: "login.html",
    styleUrls: ["auth-form.css"]
})
export class LoginComponent implements OnInit {

    private loginForm: FormGroup;
    private submitted: boolean = false;
    private hasAuthenticationError: boolean = false;

    constructor(private userContext: UserContext,
                private router: Router,
                private spinnerModalService: SpinnerModalService,
                private dialog: DialogHelperService,
                private audit: AuditService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            "username": new FormControl("", Validators.compose([Validators.required, DataTypeValidator.email])),
            "password": new FormControl("", Validators.required)
        });
    }

    login() {
        this.submitted = true;
        this.hasAuthenticationError = false;

        if (this.loginForm.valid) {
            this.spinnerModalService.show();
            this.submitted = false;
            this.hasAuthenticationError = false;

            this.userContext.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value, Role.ADMIN)
                .finally(() => this.spinnerModalService.hide())
                .subscribe(
                    user => this.router.navigate(["/admin"]),
                    error => {
                        if (error.status === STATUS.UNAUTHORIZED) {
                            this.hasAuthenticationError = true;
                        } else {
                            this.dialog.error("Service temporarily unavailable. Please try again later");
                        }
                    }
                )
        }
    }
}
