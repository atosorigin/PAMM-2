import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "copyright",
    template: `<div><i class="atos-logo small blue"><span class="sr-only">ATOS</span></i> &copy;2016 - Powered by <i class="adria-logo small"><span class="sr-only">ADRIA</span></i></div>`,
    styleUrls: ["copyright.css"]
})
export class CopyrightComponent {
}