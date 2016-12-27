import {Modal} from "angular2-modal/plugins/bootstrap";
import {Injectable} from "@angular/core";

@Injectable()
export class DialogHelperService {

    constructor(private modal: Modal) {
    }

    error(message : string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header error")
            .body(`<i class="fa fa-exclamation-circle fa-2x"></i> ${message}`)
            .okBtnClass("btn btn-danger")
            .open();
    }

    success(message : string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header success")
            .body(`<i class="fa fa-check-o fa-2x"></i> ${message}`)
            .okBtnClass("btn btn-success")
            .open();
    }

    info(message : string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header info")
            .body(`<i class="fa fa-info-circle fa-2x"></i> ${message}`)
            .bodyClass("modal-body text-info")
            .okBtnClass("btn btn-info")
            .open();
    }

    warning(message : string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header warning")
            .body(`<i class="fa fa-exclamation-triangle fa-2x"></i> ${message}`)
            .bodyClass("modal-body text-warning")
            .okBtnClass("btn btn-warning")
            .open();
    }

    alert(message : string, title?: string) {
        return this.modal.alert()
            .size("lg")
            .showClose(true)
            .title(title ? title : "")
            .headerClass("modal-header primary")
            .body(`<i class="fa fa-info-circle fa-2x"></i> ${message}`)
            .bodyClass("modal-body text-primary")
            .okBtnClass("btn btn-primary")
            .open();
    }
}