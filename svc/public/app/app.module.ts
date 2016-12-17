import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {UserModule} from "./feature/user/user.module";
import {AppComponent} from "./app.compponent";
import {AppRouting} from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        UserModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

