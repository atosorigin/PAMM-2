import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataTypeService} from "../../../service/datatype.service";
import {UserContext} from "../../../service/data/context/user.context";
import {Role} from "../../../service/data/context/role";
import {User} from "../../../service/data/context/user";

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
        this.userContext.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value, Role.USER)
            .subscribe(
                function (user: User) {
                    console.log("++++++++++++++++++do navigate");
                }, function (error: any) {
                    console.log("+++++++++++++");
                    console.log(error);
                });
    }
}
