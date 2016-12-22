import {Directive, ElementRef, HostListener} from "@angular/core";
import {NgControl} from "@angular/forms";

@Directive({
    selector: "[pammLowerCase]"
})
export class LowerCaseDirective {

    constructor(private elementRef: ElementRef, private control: NgControl) {
    }

    @HostListener('input', ['$event']) onEvent($event: any) {
        let upper = this.elementRef.nativeElement.value.toLowerCase();
        this.control.control.setValue(upper);
    }

}