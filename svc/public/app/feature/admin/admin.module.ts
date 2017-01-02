import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AdminComponent} from "./admin.component";
import {AdminGuard} from "./admin.guard";
import {Util} from "../../infrastructure/util/util";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: "", redirectTo: "admin/auth", pathMatch: "full"},
            {path: "admin/auth", loadChildren: Util.modulePath(module.id, "auth/auth.module#AuthModule")},
            {
                path: "admin",
                component: AdminComponent,
                canActivate: [AdminGuard],
                children: [
                    {path: "", redirectTo: "home", pathMatch: "full"},
                    {path: "home", loadChildren: Util.modulePath(module.id, "home/home.module#HomeModule")}
                ]
            }]),
        CommonModule,
        NgbModule
    ],
    declarations: [AdminComponent],
    providers: [AdminGuard]
})
export class AdminModule {
}
