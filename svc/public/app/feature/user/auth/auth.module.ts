import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "./register.component";
import {RouterModule} from "@angular/router";
import {PammModule} from "../../../infrastructure/pamm.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "user/auth", component: AuthComponent,
                children: [
                    {path: "login", component: LoginComponent},
                    {path: "register", component: RegisterComponent},
                    {path: "activate", component: RegisterComponent},
                ]
            }
        ]),
        ReactiveFormsModule,
        CommonModule,
        PammModule,
        SharedModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthModule {
}
