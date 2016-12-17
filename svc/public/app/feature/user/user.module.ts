import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {UserRouting} from "./user.routing";
import {AuthModule} from "./auth/auth.module";

@NgModule({
    imports: [
        UserRouting,
        AuthModule
    ],
    declarations: [
        UserComponent
    ]
})
export class UserModule {
}
