import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserContext} from "../../domain/user/user.context";
import {Role} from "../../domain/user/role";
import {Injectable} from "@angular/core";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor (private router: Router, private userContext: UserContext) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        if (state.url.indexOf("admin/auth/") > -1 ) {
            return true;
        } else if (this.userContext.user && this.userContext.user.role === Role.ADMIN && this.userContext.user.token) {
            return true
        } else {
            this.router.navigate(["user/auth"]);
            return false;
        }
    }
}