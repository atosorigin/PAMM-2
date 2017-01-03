import {Component, OnInit} from "@angular/core";
import {UserContext} from "../../domain/user/user.context";
import {Router} from "@angular/router";
import {DialogHelperService} from "../../infrastructure/ui/dialog-helper.service";

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

    constructor(private userContext: UserContext,
                private router: Router,
                private dialog: DialogHelperService) {
    }

    ngOnInit() {
    }

    toggleCollapse() {
        this._isCollapsed = !this._isCollapsed;
    }

    logout() {
        this.dialog.confirm("Are you that you want to logout?")
            .then(ok => {
                this.userContext.logout();
                this.router.navigate(["/admin/auth/login"]);
            })
            .catch(cancelled => {
            })
    }
}
