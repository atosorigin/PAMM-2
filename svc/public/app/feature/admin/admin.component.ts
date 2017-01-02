import {Component, OnInit} from "@angular/core";
import {User} from "../../domain/context/user";
import {UserContext} from "../../domain/context/user.context";

@Component({
    moduleId: module.id,
    templateUrl: "admin.html",
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
export class AdminComponent implements OnInit {

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
