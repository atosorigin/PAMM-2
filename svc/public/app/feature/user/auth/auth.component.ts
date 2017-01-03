import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
      <div class="background">
        <main>
          <heading></heading>
          <router-outlet></router-outlet>
          <copyright></copyright>
        </main>
      </div>`,
    styleUrls: ["auth.css"]
})
export class AuthComponent {
}
