import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserContext} from "../../../service/data/context/user.context";
import {TypeValidator} from "../../../service/data/type.validator";
import {Role} from "../../../service/data/context/role";
import {User} from "../../../service/data/context/user";
import {DataAccessError} from "../../../service/data/data-access.error";

@Component({
    moduleId: module.id,
    templateUrl: "login.html",
    styleUrls: ["auth-child.css"]
})

export class LoginComponent implements OnInit {

    private loginForm: FormGroup;
    private submitted: boolean = false;
    private hasAuthenticationError: boolean = false;

    constructor(private userContext: UserContext,
                private dataType: TypeValidator,
                private router: Router) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            "username": new FormControl("",
                Validators.compose([
                    Validators.required,
                    this.dataType.email,
                ])),
            "password": new FormControl("", Validators.required)
        });
    }

    login() {
        this.submitted = true;
        this.hasAuthenticationError = false;

        if (this.loginForm.valid) {
            this.submitted = false;
            this.hasAuthenticationError = false;

            this.userContext.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value, Role.USER)
                .subscribe(
                    (user: User) => this.router.navigate(["/user"]),
                    (error: DataAccessError) => {
                        if (error === DataAccessError.UNAUTHORIZED) {
                            this.hasAuthenticationError = true;
                        } else {
                        }
                    }
                )
        }
    }
}
