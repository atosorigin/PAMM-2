import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PammModule} from "../../infrastructure/pamm.module";
import {AuthModule} from "./auth/auth.module";
import {HomeModule} from "./home/home.module";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "user",
                component: UserComponent,
                children: [
                    {path: "", redirectTo: "home", pathMatch: "full"},
                    {path: "home", component: HomeComponent}
                ]
            }]),
        PammModule,
        BrowserModule,
        NgbModule,

        AuthModule,
        HomeModule
    ],
    declarations: [
        UserComponent,
    ]
})
export class UserModule {
}
