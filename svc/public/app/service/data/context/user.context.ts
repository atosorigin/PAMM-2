import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {Role} from "./role";
import {User} from "./user";
import {DataAccessError} from "../data-access.error";


@Injectable()
export class UserContext {
    private _user: User = null;

    constructor(private http: Http) {
    }

    login(username: string, password: string, role: Role): Observable<User> {
        this.logout();

        let loginUrl: string;

        if (role === Role.ADMIN) {
            loginUrl = "login/admin";
        } else if (role === Role.USER) {
            loginUrl = "login/user";
        }

        return this.http.post(loginUrl, {}, {
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
        ).catch((response: Response) => {
            if (response.status === 401) {
                return Observable.throw(DataAccessError.UNAUTHORIZED);
            } else {
                return Observable.throw(DataAccessError.SERVER);
            }
        })
    }

    logout() {
        this._user = null;
    }

    get user(): User {
        return this._user;
    }
}

