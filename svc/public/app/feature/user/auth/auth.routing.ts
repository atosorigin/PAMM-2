import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";

const routes: Routes = [
    {
        path: "user/auth", component: AuthComponent,
        children: [
            {path: "login", component: LoginComponent},
            {path: "register", component: RegisterComponent},
            {path: "activate", component: RegisterComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AuthRouting {
}