import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserContext} from "../../domain/context/user.context";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private userContext: UserContext) {
    }
    
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        return true;
    }

}