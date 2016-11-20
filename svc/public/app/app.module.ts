import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.compponent";
import {AppRouting} from "./app.routing";
import {RouterModule} from "@angular/router";
import {UserModule} from "./feature/user/user.module";
import {AuthModule} from "./feature/user/auth/auth.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        UserModule,
        AuthModule,
        AppRouting
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

