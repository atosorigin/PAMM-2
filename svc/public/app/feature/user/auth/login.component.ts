import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserContext} from "../../../service/data/context/user.context";
import {DataTypeService} from "../../../service/datatype.service";
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
                private dataType: DataTypeService) {
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
            // reset submitt flag
            this.submitted = false;

            this.userContext.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value, Role.USER)
                .subscribe(
                    (user: User) => console.log("++++++++++++++++++do navigate"),
                    (error: DataAccessError) => {
                        console.log("ERROR " + error);

                        if (error === DataAccessError.UNAUTHORIZED) {
                            this.hasAuthenticationError = true;
                        } else {
                            console.log("TODO bootstrape dialog");
                        }
                    }
                )
        }
    }
}
