import {Component} from "@angular/core";

@Component({
    selector: "app",
    template:
    "<div defaultOverlayTarget></div>" + // modal dialog
    "<spinner-modal></spinner-modal>" + // modal spinner
    "<router-outlet></router-outlet>"
})
export class AppComponent {
}
