import {Role} from "./role";

export class User {
    get username(): string {
        return this._username;
    }

    get forename(): string {
        return this._forename;
    }

    get surname(): string {
        return this._surname;
    }

    get token(): string {
        return this._token;
    }

    get role(): Role {
        return this._role;
    }
    constructor(private _username: string,
                private _forename: string,
                private _surname: string,
                private _token: string,
                private _role: Role) {
    }
}