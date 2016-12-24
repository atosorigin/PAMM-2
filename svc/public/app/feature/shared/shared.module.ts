import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TermsOfUseComponent} from "./terms.component";


@NgModule({
    imports: [
        RouterModule.forRoot([{path: "terms-of-use", component: TermsOfUseComponent}])
    ],
    declarations: [
        TermsOfUseComponent
    ],
    exports: [
        TermsOfUseComponent
    ]
})
export class SharedModule {
}
