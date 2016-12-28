import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "./register.component";
import {RouterModule} from "@angular/router";
import {PammModule} from "../../../infrastructure/pamm.module";
import {SharedModule} from "../../shared/shared.module";
import {ActivatedNoticeComponent} from "./activated-notice.component";
import {ForgottenPasswordComponent} from "./forgotten-password.component";
import {ResetPasswordComponent} from "./reset-password.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "user/auth", component: AuthComponent,
                children: [
                    {path: "login", component: LoginComponent},
                    {path: "register", component: RegisterComponent},
                    {path: "activated", component: ActivatedNoticeComponent},
                    {path: "forgotten-password", component: ForgottenPasswordComponent},
                    {path: "reset-password/:token", component: ResetPasswordComponent}
                ]
            }
        ]),
        ReactiveFormsModule,
        CommonModule,
        PammModule,
        SharedModule,
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        ActivatedNoticeComponent,
        ForgottenPasswordComponent,
        ResetPasswordComponent
    ]
})
export class AuthModule {
}
