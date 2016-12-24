import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {DataType} from "../../../service/data/data-type";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "register.html",
    styleUrls: ["auth-form.css"]
})

export class RegisterComponent implements OnInit {
    private registerForm: FormGroup;
    private submitted: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            "email": new FormControl("",
                Validators.compose([
                    Validators.required,
                    DataType.email,
                ])),
            "emailConfirm": new FormControl("",
                Validators.compose([
                    Validators.required
                ])),
            "password": new FormControl("",
                Validators.compose([
                    Validators.required,
                    DataType.password,
                ])),
            "passwordConfirm": new FormControl("",
                Validators.compose([
                    Validators.required
                ])),
            "forename": new FormControl("",
                Validators.compose([
                    Validators.required
                ])),
            "surname": new FormControl("",
                Validators.compose([
                    Validators.required
                ])),
            "termsOfUse": new FormControl("",
                Validators.compose([
                    Validators.required
                ]))
        });
    }

    register() {
        console.log("++++ Register submitted");
    }

    cancel() {
        //this.router.
    }
}
