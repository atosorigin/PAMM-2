import {Component, OnInit, Input} from "@angular/core";
import {MenuType, RouteInfo} from "./navbar";

@Component({
    moduleId: module.id,
    selector: "navbar",
    templateUrl: "navbar.component.html",
    styles: [`.navbar-brand.hidden-sm-up {padding-top: 10px; }`]
})
export class NavbarComponent implements OnInit {

    @Input() routes: RouteInfo[];

    public menuItems: any[];
    public brandMenu: any;
    isCollapsed = true;

    constructor() {
    }

    ngOnInit() {
        this.menuItems = this.routes.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
        this.brandMenu = this.routes.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
    }

    public get menuIcon(): string {
        return this.isCollapsed ? "☰" : "✖";
    }

    public getMenuItemClasses(menuItem: any) {
        return {
            'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
        };
    }
}
