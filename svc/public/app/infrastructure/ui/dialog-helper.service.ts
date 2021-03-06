import {Modal} from "angular2-modal/plugins/bootstrap";
import {Injectable} from "@angular/core";
import {AuditService} from "../util/audit.service";

@Injectable()
export class DialogHelperService {

    constructor(private modal: Modal,
                private audit: AuditService) {
    }

    error(message: string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header dialog danger")
            .body(`<i class="fa fa-exclamation-circle fa-2x"></i>${message}`)
            .bodyClass("modal-body dialog text-danger")
            .okBtnClass("btn btn-danger")
            .open();
    }

    success(message: string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header dialog success")
            .body(`<i class="fa fa-check fa-2x"></i>${message}`)
            .bodyClass("modal-body dialog text-success")
            .okBtnClass("btn btn-success")
            .open();
    }

    info(message: string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header dialog info")
            .body(`<i class="fa fa-info-circle fa-2x"></i>${message}`)
            .bodyClass("modal-body dialog text-info")
            .okBtnClass("btn btn-info")
            .open();
    }

    warning(message: string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header dialog warning")
            .body(`<i class="fa fa-exclamation-triangle fa-2x"></i>${message}`)
            .bodyClass("modal-body dialog text-warning")
            .okBtnClass("btn btn-warning")
            .open();
    }

    alert(message: string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header dialog primary")
            .body(`<i class="fa fa-info-circle fa-2x"></i>${message}`)
            .bodyClass("modal-body dialog text-primary")
            .okBtnClass("btn btn-primary")
            .open();
    }

    confirm(message: string, title?: string) {
        return this.modal.confirm()
            .size('lg')
            .isBlocking(true)
            .showClose(true)
            .keyboard(27)
            .title(title ? title : "")
            .headerClass("modal-header dialog primary")
            .body(`<i class="fa fa-question fa-2x"></i>${message}`)
            .bodyClass("modal-body dialog text-primary")
            .open()
            .catch(error => this.audit.error(`DialogHelperService::confirm ${error}`))
            .then(dialog => dialog.result); // dialog has more properties,lets just return the promise for a result.
    }
}