import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {UserModule} from "./feature/user/user.module";
import {AppComponent} from "./app.compponent";
import {UserContext} from "./domain/context/user.context";
import {PammModule} from "./infrastructure/pamm.module";
import {DataAccessService} from "./data/data-access.service";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([{path: "", redirectTo: "/user/auth/login", pathMatch: "full"},], {useHash: true}),
        HttpModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
        PammModule,
        UserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        UserContext,
        DataAccessService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

