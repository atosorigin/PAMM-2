import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {AuthRouting} from "./auth.routing";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "./register.component";

@NgModule({
    imports: [
        AuthRouting,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthModule {
}
