import {Component, OnInit} from "@angular/core";
import {User} from "../../domain/context/user";
import {UserContext} from "../../domain/context/user.context";
import {MenuType, RouteInfo} from "../../infrastructure/ui/navbar/navbar";

@Component({
    moduleId: module.id,
    templateUrl: "user.html",
    styleUrls: []
})
export class UserComponent implements OnInit {

    private _user: User;

    readonly navroutes: RouteInfo[] = [
        {path: '', title: 'Amiga', menuType: MenuType.BRAND},
        {path: 'heroes', title: `Heroes`, menuType: MenuType.LEFT},
        {path: 'about', title: 'About Us', menuType: MenuType.RIGHT},
        {path: 'contact', title: 'Contact', menuType: MenuType.RIGHT}
    ];

    get user(): User {
        return this.userContext.user;
    }

    constructor(private userContext: UserContext) {
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
