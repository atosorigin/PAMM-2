import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserComponent} from "./user.component";
import {UserGuard} from "./user.guard";

declare let app$: any;

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: "", redirectTo: "user/auth", pathMatch: "full"},
            {path: "user/auth", loadChildren: app$.modulePath(module.id, "auth/auth.module#AuthModule")},
            {
                path: "user",
                component: UserComponent,
                canActivate: [UserGuard],
                children: [
                    {path: "", redirectTo: "home", pathMatch: "full"},
                    {path: "home", loadChildren: app$.modulePath(module.id, "home/home.module#HomeModule")}
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
