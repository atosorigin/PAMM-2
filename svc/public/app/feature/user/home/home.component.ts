import {Component, OnInit} from "@angular/core";
import {User} from "../../../domain/user/user";
import {UserContext} from "../../../domain/user/user.context";

@Component({
    moduleId: module.id,
    template: `<h1>TO DO - User Home</h1><chart></chart>`
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
