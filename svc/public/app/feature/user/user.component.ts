import {Component, OnInit} from "@angular/core";
import {User} from "../../domain/context/user";
import {UserContext} from "../../domain/context/user.context";
import {UUID} from "../../infrastructure/util/uuid";

@Component({
    moduleId: module.id,
    templateUrl: "user.html"
})
export class UserComponent implements OnInit {

    uuid: string;
    isCollapsed = true;

    private _user: User;
    get user(): User {
        return this.userContext.user;
    }

    constructor(private userContext: UserContext) {
        this.uuid = UUID.generate();
    }

    ngOnInit() {
        console.log(this.user);
    }

    isAtHome() {
        return true;
    }

    navigateToHome() {
    }

}
