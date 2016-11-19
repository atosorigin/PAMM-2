
import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {AuthRouting} from "./auth.routing";
import {LoginComponent} from "./login.component";

@NgModule({
    imports: [
        AuthRouting
    ],
    declarations: [
        AuthComponent,
        LoginComponent
    ],
    bootstrap: [AuthComponent]
})
export class AuthModule {
}
