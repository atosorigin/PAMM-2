import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserContext} from "../../../domain/context/user.context";
import {DataTypeValidator} from "../../../infrastructure/validator/data-type.validator";
import {Role} from "../../../domain/context/role";
import {User} from "../../../domain/context/user";
import {SpinnerModalService} from "../../../infrastructure/ui/spinner-modal/spinner-modal.service";
import {Response} from "@angular/http";
import {STATUS} from "angular-in-memory-web-api";
import {AuditService} from "../../../infrastructure/audit.service";
import {DialogHelperService} from "../../../infrastructure/ui/dialog-helper.service";

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

            this.userContext.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value, Role.USER)
                .subscribe(
                    (user: User) => {
                        this.router.navigate(["/user"]);
                        this.spinnerModalService.hide();
                    },
                    (error: Response) => {
                        this.spinnerModalService.hide();
                        if (error.status === STATUS.UNAUTHORIZED) {
                            this.hasAuthenticationError = true;
                        } else {
                            this.dialog.error("Service temporarily unavailable. Please try again later");
                        }
                    }
                )
        }
    }

    navigateToRegistration() {
        this.router.navigateByUrl("/user/auth/register");
    }
}
