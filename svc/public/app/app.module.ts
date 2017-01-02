import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";

import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {UserContext} from "./domain/user/user.context";
import {InfrastructureModule} from "./infrastructure/infrastructure.module";
import {DataAccessService} from "./data/data-access.service";

import {AdminModule} from "./feature/admin/admin.module";
import {UserModule} from "./feature/user/user.module";

import {AppComponent} from "./app.compponent";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([{path: "**", redirectTo: "/user/auth/login", pathMatch: "full"}], {useHash: true}),
        HttpModule,
        NgbModule.forRoot(),
        ModalModule.forRoot(),
        BootstrapModalModule,
        InfrastructureModule,
        UserModule,
        AdminModule
    ],
    declarations: [AppComponent],
    providers: [
        UserContext,
        DataAccessService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

