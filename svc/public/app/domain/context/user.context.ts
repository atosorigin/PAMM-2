import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Role} from "./role";
import {User} from "./user";
import * as testing from "selenium-webdriver/testing";

@Injectable()
export class UserContext {
    private static defaultHeaders(): Headers {
        return new Headers({
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Expires": "0",
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=UTF-8"
        });
    }

    private _user: User = null;
    get user(): User {
        return this._user;
    }

    constructor(private http: Http) {
    }

    login(username: string, password: string, role: Role): Observable<User> {
        this.logout();

        let requestHeaders: Headers = UserContext.defaultHeaders();
        requestHeaders.append("Authorization", `Basic ${btoa(username + ":" + password)}`);

        return this.http.post(
            role === Role.ADMIN ? "login/admin" : "login/user",
            {},
            {
                headers: requestHeaders
            }
        ).map((response: Response) => {
                let result = response.json();
                this._user = new User(username, result.forename, result.surname, result.authToken, role);
                return this._user;
            }
        )
    }

    logout() {
        this._user = null;
    }

    register(registration: any, role: Role) {
        return this.http.post(
            role === Role.ADMIN ? "register/admin" : "register/user",
            registration,
            {
                headers: UserContext.defaultHeaders()
            });
    }

    requestPasswordReset(email: string, role: Role) {
        return this.http.post(
            "reset",
            {
                "email": email,
                "role": role === Role.ADMIN ? "ADMIN" : "USER"
            },
            {
                headers: UserContext.defaultHeaders()
            });
    }

    resetPassword(verificationCode: string, password: string, token: string) {
        let requestHeaders: Headers = UserContext.defaultHeaders();
        requestHeaders.append("Authorization", `Bearer ${token}`);

        return this.http.put(
            "reset",
            {
                "verification": verificationCode.trim(),
                "password": password
            },
            {
                headers: requestHeaders
            });
    };
}