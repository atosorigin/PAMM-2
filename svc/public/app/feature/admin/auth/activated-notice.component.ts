import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
      <div class="box">
        <p class="heading">Your account has been successfully activate</p>
        <a [routerLink]="['/admin/auth/login']"> <i class="fa fa-arrow-right"></i> Go to login</a>
      </div>`,
    styles: [`
    .heading {
        font-weight: bold;
        font-size: 14pt;
        color: #0066a1;
        border-bottom: 1px solid darkgray;
    }

    .box {
        margin: 10px 0 10px 0;
        background-color: white;
        border: 1px solid lightgray;
        padding: 15px;
    }`]
})
export class ActivatedNoticeComponent {
}