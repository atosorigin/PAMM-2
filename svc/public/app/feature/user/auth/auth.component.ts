import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    template: `

    <div class="user-auth" data-ng-cloak>
      <header class="container-fluid">
          <h1>PAMM-2 </h1>
      </header>
      <main><router-outlet></router-outlet></main>
      <footer>
        <div><i class="fa fa-copyright"></i>2016 Atos EPI- Powered by PAMM2</div>
      </footer>
    </div>`,

    styleUrls: ["auth.css"]
})

export class AuthComponent {
}
