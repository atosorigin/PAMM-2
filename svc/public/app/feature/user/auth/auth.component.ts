import {Component} from "@angular/core";

@Component({
    template: `
        <div id="user-auth" data-ng-cloak>
          <header class="container-fluid">
              <h1>PAMM-2 </h1>
          </header>
          <router-outlet></router-outlet>
          <footer>
            <div><i class="fa fa-copyright"></i>2016 Atos EPI- Powered by PAMM2</div>
          </footer>
        </div>`,
    styleUrls: ["app/feature/user/auth/auth.css"]
})

export class AuthComponent {
}
