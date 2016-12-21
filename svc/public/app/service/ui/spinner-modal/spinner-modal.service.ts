import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";


@Injectable()
export class SpinnerModalService {
    public readonly spinnerSubject: Subject<boolean> = new Subject();

    constructor() {
    }

    show() {
        this.spinnerSubject.next(true);
    }

    hide() {
        this.spinnerSubject.next(false);
    }
}
