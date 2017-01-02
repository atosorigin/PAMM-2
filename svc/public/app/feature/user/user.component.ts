import {Component, OnInit} from "@angular/core";
import {User} from "../../domain/user/user";
import {UserContext} from "../../domain/user/user.context";

@Component({
    moduleId: module.id,
    templateUrl: "user.html",
    styles: [`
        div.content {
            padding-top: 60px;
        }
        
        nav {
            min-height: 60px;
        }

        .dropdown-menu[aria-label="Settings"] {
            margin-left: -4em;
        }`
    ]
})
export class UserComponent implements OnInit {

    private _isCollapsed = true;
    get isCollapsed(): boolean {
        return this._isCollapsed;
    }

    private _user: User;
    get user(): User {
        return this.userContext.user;
    }

    constructor(private userContext: UserContext) {
    }

    ngOnInit() {
    }

    toggleCollapse() {
        this._isCollapsed = !this._isCollapsed;
    }
}
