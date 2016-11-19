import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.compponent";
import {AppRouting} from "./app.routing";
import {RouterModule} from "@angular/router";
import {UserModule} from "./feature/user/user.module";
import {AuthModule} from "./feature/user/auth/auth.module";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        UserModule,
        AuthModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

