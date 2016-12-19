import {NgModule, Component} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {UserModule} from "./feature/user/user.module";
import {HttpModule} from "@angular/http";
import {UserContext} from "./service/data/context/user.context";
import {DataAccessService} from "./service/data/data-access.service";
import {DataTypeService} from "./service/datatype.service";

@Component({
    selector: "app",
    template: `<router-outlet></router-outlet>`
})
class AppComponent {
}

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: "", redirectTo: "/user/auth/login", pathMatch: "full"},
        ], {useHash: true}),
        HttpModule,
        UserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        DataTypeService,
        DataAccessService,
        UserContext
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

