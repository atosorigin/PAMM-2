import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
    moduleId: module.id,
    templateUrl: "register.html"
})

export class RegisterComponent {
    private registerForm: FormGroup;


    constructor() {
        this.registerForm = new FormGroup({
        });
    }

    register() {
        console.log("++++ Register submitted");
    }
}
