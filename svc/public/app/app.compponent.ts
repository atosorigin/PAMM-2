import {Component} from "@angular/core";
import {UserContext} from "./service/data/context/user.context";
import {DataTypeService} from "./service/datatype.service";

@Component({
    selector: "pamm",
    template: `<router-outlet></router-outlet>`,
    providers: [UserContext, DataTypeService]
})
export class AppComponent {
}
