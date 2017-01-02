import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AdminComponent} from "./admin.component";

declare let app$: any;

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: "", redirectTo: "admin/auth", pathMatch: "full"},
            {path: "admin/auth", loadChildren: app$.modulePath(module.id, "auth/auth.module#AuthModule")},
            {
                path: "admin",
                component: AdminComponent,
                children: [
                    {path: "", redirectTo: "home", pathMatch: "full"},
                    {path: "home", loadChildren: app$.modulePath(module.id, "home/home.module#HomeModule")}
                ]
            }]),
        CommonModule,
        NgbModule,
    ],
    declarations: [
        AdminComponent
    ]
})
export class AdminModule {

}
