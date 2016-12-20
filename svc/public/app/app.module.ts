import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {UserModule} from "./feature/user/user.module";
import {AppComponent} from "./app.compponent";
import {HttpModule} from "@angular/http";
import {SpinnerModalComponent} from "./lib/spinner-modal/spinner-modal.component";
import {UserContext} from "./service/data/context/user.context";
import {DataTypeService} from "./service/datatype.service";
import {SpinnerModalService} from "./lib/spinner-modal/spinner-modal.service";
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([{path: "", redirectTo: "/user/auth/login", pathMatch: "full"},], {useHash: true}),
        HttpModule,
        UserModule
    ],
    declarations: [
        AppComponent,
        SpinnerModalComponent
    ],
    providers: [
        UserContext,
        DataTypeService,
        SpinnerModalService],
    bootstrap: [AppComponent, SpinnerModalComponent]
})

export class AppModule {
}

