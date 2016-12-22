import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {UserModule} from "./feature/user/user.module";
import {AppComponent} from "./app.compponent";
import {DataType} from "./service/data/data-type";
import {UserContext} from "./service/data/context/user.context";
import {PammModule} from "./lib/pamm.module";

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
        DataType,
        UserContext
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

