import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes = [
    {
        path: "",
        redirectTo: "/user/auth/login",
        pathMatch: "full"
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {
}