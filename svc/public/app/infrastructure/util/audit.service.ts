import {DataAccessService} from "../../data/data-access.service";
import {UserContext} from "../../domain/user/user.context";
import {Injectable} from "@angular/core";

const AUDIT_URL: string = "/audit";

@Injectable()
export class AuditService {
    constructor(private dataAccess: DataAccessService, private userContext: UserContext) {
    }

    debug(message: string) {
        console.log(`[DEUBG] ${message}`);
    }

    severe(message: string) {
        let msg = `[SEVERE] ${message}`;
        console.log(msg);
        if (this.userContext.user) {
            this.dataAccess.POST(AUDIT_URL, msg);
        }
    }

    error(message: string) {
        let msg = `[ERROR] ${message}`;
        console.log(msg);
        if (this.userContext.user) {
            this.dataAccess.POST(AUDIT_URL, msg);
        }
    }

    warn(message: string) {
        console.log(`[WARN] ${message}`);
    }

    info(message: string) {
        console.log(`[INFO] ${message}`);
    }
}
