import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TermsOfUseComponent} from "./terms.component";
import {CopyrightComponent} from "./copyright.component";
import {HeadingComponent} from "./heading.component";

@NgModule({
    imports: [
        RouterModule.forChild([{path: "terms-of-use", component: TermsOfUseComponent}])
    ],
    declarations: [
        TermsOfUseComponent,
        HeadingComponent,
        CopyrightComponent
    ],
    exports: [
        TermsOfUseComponent,
        HeadingComponent,
        CopyrightComponent
    ]
})
export class SharedModule {
}
