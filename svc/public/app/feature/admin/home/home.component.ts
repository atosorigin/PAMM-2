import {Component, OnInit} from "@angular/core";
import {User} from "../../../domain/context/user";
import {UserContext} from "../../../domain/context/user.context";

@Component({
    moduleId: module.id,
    template: `<h1>TO DO - Admin Home</h1><chart></chart>`
})
export class HomeComponent implements OnInit {


    private _user: User;
    get user(): User {
        return this.userContext.user;
    }

    constructor(private userContext: UserContext) {
    }

    ngOnInit() {
    }
}
