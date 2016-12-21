import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import {UserModule} from "./feature/user/user.module";
import {AppComponent} from "./app.compponent";
import {SpinnerModalService} from "./service/ui/spinner-modal/spinner-modal.service";
import {SpinnerModalComponent} from "./service/ui/spinner-modal/spinner-modal.component";
import {UserContext} from "./service/data/context/user.context";
import {TypeValidator} from "./service/data/type.validator";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([{path: "", redirectTo: "/user/auth/login", pathMatch: "full"},], {useHash: true}),
        HttpModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
        UserModule
    ],
    declarations: [
        AppComponent,
        SpinnerModalComponent
    ],
    providers: [
        UserContext,
        TypeValidator,
        SpinnerModalService],
    bootstrap: [AppComponent]
})

export class AppModule {
}

