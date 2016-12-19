import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {UserModule} from "./feature/user/user.module";
import {AppComponent} from "./app.compponent";
import {AppRouting} from "./app.routing";
import {HttpModule} from "@angular/http";
import {UserContext} from "./service/data/context/user.context";
import {DataAccessService} from "./service/data/data-access.service";
import {DataTypeService} from "./service/datatype.service";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
        UserModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
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

