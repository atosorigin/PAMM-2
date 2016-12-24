import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    template: `
      <div>
        <main>
          <header><i class="adria-logo"><span class="sr-only">ADRIA</span></i></header>
          <router-outlet></router-outlet>
          <footer>
            <i class="atos-logo"><span class="sr-only">ATOS</span></i> &copy;2016 - powered by <i class="adria-logo small"><span class="sr-only">ADRIA</span></i>
          </footer>
        </main>
      </div>`,
    styleUrls: ["auth.css"]
})

export class AuthComponent {
}
