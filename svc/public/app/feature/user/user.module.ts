import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {AuthModule} from "./auth/auth.module";
import {RouterModule} from "@angular/router";
import {PammModule} from "../../infrastructure/pamm.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ChartComponent} from "./chart.component";

@NgModule({
    imports: [
        RouterModule.forChild([{path: "user", component: UserComponent}]),
        AuthModule,
        PammModule,
        BrowserModule,
        NgbModule
    ],
    declarations: [
        UserComponent,
        ChartComponent
    ]
})
export class UserModule {
}
