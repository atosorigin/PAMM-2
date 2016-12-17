import {Component} from "@angular/core";
import {DataTypeService} from "./service/datatype.service";


@Component({
    selector: "pamm",
    template: `<router-outlet></router-outlet>`,
    providers: [DataTypeService]

})
export class AppComponent {
}
