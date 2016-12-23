import {Component} from "@angular/core";

@Component({
    template: `
      <div>
        <main>
          <header></header>
          <router-outlet></router-outlet>
          <footer>
            &copy; 2016 <i class="atos-logo"></i>
          </footer>
        </main>
      </div>`,
    styleUrls: ["app/feature/user/auth/auth.css"]
})

export class AuthComponent {
}
