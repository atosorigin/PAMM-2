import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserComponent} from "./user.component";

declare let app$: any;

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "user",
                component: UserComponent,
                children: [
                    {path: "", redirectTo: "home", pathMatch: "full"},
                    {path: "home", loadChildren: app$.modulePath(module.id, "home/home.module#HomeModule")}
                ]
            }, {
                path: "user/auth", loadChildren: app$.modulePath(module.id, "auth/auth.module#AuthModule")
            }]),
        CommonModule,
        NgbModule,
    ],
    declarations: [
        UserComponent,
    ]
})
export class UserModule {
}
