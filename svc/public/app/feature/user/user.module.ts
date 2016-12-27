import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {AuthModule} from "./auth/auth.module";
import {RouterModule} from "@angular/router";
import {PammModule} from "../../infrastructure/pamm.module";

@NgModule({
    imports: [
        RouterModule.forChild([{path: 'user', component: UserComponent}]),
        AuthModule,
        PammModule
    ],
    declarations: [
        UserComponent
    ]
})
export class UserModule {
}
