import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {SpinnerModalService} from "./spinner-modal.service";

@Component({
    moduleId: module.id,
    selector: "spinner-modal",
    template: `<div [hidden]="!active"><i class="fa fa-spinner fa-spin fa-5x"></i></div>`,
    styles: [`
        div {
            position: fixed; 
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.6);
            z-index: 1000;
        }
        
        i {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            color: #0066a1;
        }
    `]
})

export class SpinnerModalComponent implements OnInit, OnDestroy {
    private active: boolean = false;
    private subscription: Subscription;

    constructor(private spinnerModelService: SpinnerModalService) {
    }

    ngOnInit() {
        this.subscription = this.spinnerModelService.spinnerSubject.subscribe((active: boolean) => this.active = active);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
