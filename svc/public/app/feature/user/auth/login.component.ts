import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    templateUrl: "login.html",
    styleUrls: ["auth-child.css"]
})

export class LoginComponent {
    private loginForm: FormGroup;
    private hasAuthenticationError : boolean = false;

    constructor() {
        this.loginForm = new FormGroup({
            "username": new FormControl("", Validators.required),
            "password": new FormControl("", Validators.required)
        });
    }

    login() {
        console.log("++++++++++++");
        console.log(this.loginForm);
    }
}
