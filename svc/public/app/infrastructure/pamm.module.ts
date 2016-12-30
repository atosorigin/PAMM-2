import {NgModule} from "@angular/core";
import {UpperCaseDirective} from "./directives/uppercase.directive";
import {LowerCaseDirective} from "./directives/lowercase.directive";
import {SpinnerModalComponent} from "./ui/spinner-modal/spinner-modal.component";
import {SpinnerModalService} from "./ui/spinner-modal/spinner-modal.service";
import {AuditService} from "./audit.service";
import {DialogHelperService} from "./ui/dialog-helper.service";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [
        UpperCaseDirective,
        LowerCaseDirective,
        SpinnerModalComponent
    ],
    exports: [
        UpperCaseDirective,
        LowerCaseDirective,
        SpinnerModalComponent
    ],
    providers: [
        SpinnerModalService,
        AuditService,
        DialogHelperService
    ]
})

export class PammModule {
}