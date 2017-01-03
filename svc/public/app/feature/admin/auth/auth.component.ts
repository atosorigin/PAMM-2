import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
      <div class="background">
        <main>
          <heading></heading>
          <div class="sub-heading">Admin Portal</div>
          <router-outlet></router-outlet>
          <copyright></copyright>
        </main>
      </div>`,
    styleUrls: ["auth.css"]
})
export class AuthComponent {
}
