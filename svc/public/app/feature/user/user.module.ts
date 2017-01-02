import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserComponent} from "./user.component";
import {UserGuard} from "./user.guard";
import {Util} from "../../infrastructure/util/util";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: "", redirectTo: "user/auth", pathMatch: "full"},
            {path: "user/auth", loadChildren: Util.modulePath(module.id, "auth/auth.module#AuthModule")},
            {
                path: "user",
                component: UserComponent,
                canActivate: [UserGuard],
                children: [
                    {path: "", redirectTo: "home", pathMatch: "full"},
                    {path: "home", loadChildren: Util.modulePath(module.id, "home/home.module#HomeModule")}
                ]
            }]),
        CommonModule,
        NgbModule
    ],
    declarations: [UserComponent,],
    providers: [UserGuard]
})
export class UserModule {
}
