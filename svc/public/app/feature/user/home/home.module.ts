import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {PammModule} from "../../../infrastructure/pamm.module";
import {HomeComponent} from "./home.component";
import {ChartComponent} from "./chart.component";

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
        PammModule
    ],
    declarations: [
        HomeComponent,
        ChartComponent
    ]
})
export class HomeModule {
}
