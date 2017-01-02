import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
      <div>
        <main>
          <heading></heading>
          <h3>Admin</h3>
          <router-outlet></router-outlet>
          <copyright></copyright>
        </main>
      </div>`,
    styleUrls: ["auth.css"]
})
export class AuthComponent {
}
