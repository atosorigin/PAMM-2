import {Component} from "@angular/core";

@Component({
    selector: "app",
    template: `<div defaultOverlayTarget></div><spinner-modal></spinner-modal><router-outlet></router-outlet>`
})
export class AppComponent {
}
