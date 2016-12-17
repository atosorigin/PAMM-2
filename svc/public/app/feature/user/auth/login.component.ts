import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataTypeService} from "../../../service/datatype.service";

@Component({
    moduleId: module.id,
    templateUrl: "login.html",
    styleUrls: ["auth-child.css"],
    providers: [DataTypeService]
})

export class LoginComponent {
    private loginForm: FormGroup;
    private submitted: boolean = false;
    private hasAuthenticationError : boolean = false;

    constructor(private dataType : DataTypeService) {
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
        console.log("++++++++++++");
        console.log(this.loginForm);
    }
}
