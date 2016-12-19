import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

@Injectable()
export class DataAccessService {

    constructor(private http: Http) {
    }

    private createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('username:password'));
    }

    // get(url: string) {
    //     let headers = new Headers();
    //     this.createAuthorizationHeader(headers);
    //     return this.http.get(url, {
    //         headers: headers
    //     });
    // }


    post(url: string, data:any) {
        let headers = new Headers();
        return this.http.post(url, data, {
            headers: headers
        });
    }
}