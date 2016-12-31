import {Component, OnInit} from "@angular/core";
import {User} from "../../domain/context/user";
import {UserContext} from "../../domain/context/user.context";
import {UUID} from "../../infrastructure/util/uuid";

@Component({
    moduleId: module.id,
    templateUrl: "user.html",
    styles: [`
        div.content {
            position: relative; 
            top: 60px;
        }
        
        nav {
            min-height: 60px;
        }

        .nav.pull-right .dropdown-menu {
            margin-left: -60px
        }`
    ]
})
export class UserComponent implements OnInit {

    private _uuid: string;
    get uuid(): string {
        return this._uuid;
    }

    private _isCollapsed = true;
    get isCollapsed(): boolean {
        return this._isCollapsed;
    }

    private _user: User;
    get user(): User {
        return this.userContext.user;
    }

    constructor(private userContext: UserContext) {
        this._uuid = UUID.generate();
    }

    ngOnInit() {
    }

    toggleCollapse() {
        this._isCollapsed = !this._isCollapsed;
    }
}
