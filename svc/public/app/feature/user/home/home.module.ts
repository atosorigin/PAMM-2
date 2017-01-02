import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {InfrastructureModule} from "../../../infrastructure/infrastructure.module";
import {HomeComponent} from "./home.component";
import {ChartComponent} from "./chart.component";
import {UserGuard} from "../user.guard";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                component: HomeComponent
            }
        ]),

        ReactiveFormsModule,
        CommonModule,
        InfrastructureModule
    ],
    declarations: [
        HomeComponent,
        ChartComponent
    ]
})
export class HomeModule {
}
