import {Directive, ElementRef, HostListener} from "@angular/core";
import {NgControl} from "@angular/forms";

@Directive({
    selector: '[pammUpperCase]'
})
export class UpperCaseDirective {
    constructor(private elementRef: ElementRef, private control: NgControl) {
    }

    @HostListener("input", ["$event"]) onEvent($event: any) {
        let upper = this.elementRef.nativeElement.value.toUpperCase();
        this.control.control.setValue(upper);
    }
}