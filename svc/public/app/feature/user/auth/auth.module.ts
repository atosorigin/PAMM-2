
import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {AuthRouting} from "./auth.routing";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";

@NgModule({
    imports: [
        AuthRouting
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent
    ],
    bootstrap: [AuthComponent]
})
export class AuthModule {
}
