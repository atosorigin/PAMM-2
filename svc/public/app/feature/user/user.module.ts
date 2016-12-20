import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {AuthModule} from "./auth/auth.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([{path: 'user', component: UserComponent}]),
        AuthModule
    ],
    declarations: [
        UserComponent
    ],
    bootstrap: [UserComponent]
})
export class UserModule {
}
