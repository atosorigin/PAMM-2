import {Injectable} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {UserContext} from "../domain/context/user.context";

// TODO add unauthorized handler

@Injectable()
export class DataAccessService {
    constructor(private readonly http: Http, private readonly userContext: UserContext) {
    }

    private createHeaders(withContent?: boolean) {
        let headers: Headers = new Headers({
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Expires": "0",
            "Accept": "application/json, text/plain, */*"
        });

        if (this.userContext.user.token) {
            headers.append("Authorization", `Bearer ${this.userContext.user.token}`);
        }

        if (withContent) {
            headers.append("Content-Type", "application/json;charset=UTF-8")
        }

        return headers;
    }

    GET(url: string, params?: URLSearchParams) {
        return this.http.get(url, {
            headers: this.createHeaders(),
            search: params
        });
    }

    POST(url: string, data: any) {
        return this.http.post(url, data, {
            headers: this.createHeaders(true)
        });
    }

    PUT(url: string, data: any) {
        return this.http.put(url, data, {
            headers: this.createHeaders(true)
        });
    }

    DELETE(url: string) {
        return this.http.get(url, {
            headers: this.createHeaders()
        });
    }
}