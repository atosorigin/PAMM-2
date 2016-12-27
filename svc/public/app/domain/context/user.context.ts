import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Role} from "./role";
import {User} from "./user";

@Injectable()
export class UserContext {
    private _user: User = null;

    get user(): User {
        return this._user;
    }

    constructor(private http: Http) {
    }

    login(username: string, password: string, role: Role): Observable<User> {
        this.logout();

        return this.http.post(role === Role.ADMIN ? "login/admin" : "login/user", {}, {
                headers: new Headers({
                    "Authorization": `Basic ${btoa(username + ":" + password)}`,
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json;charset=UTF-8"
                })
            }
        ).map((response: Response) => {
                let result = response.json();
                this._user = new User(username, result.forename, result.surname, result.authToken, role);
                return this.user;
            }
        )
    }

    logout() {
        this._user = null;
    }

    register(registration: any, role: Role) {
        return this.http.post(role === Role.ADMIN ? "register/admin" : "register/user",
            registration, {
                headers: new Headers({
                    "Accept": "application/json, text/plain, */*",
                    "Content-Type": "application/json;charset=UTF-8"
                })
            });
    }
}

