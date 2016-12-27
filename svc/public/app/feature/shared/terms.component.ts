import {Component} from "@angular/core";
import {Location} from "@angular/common";

@Component({
    moduleId: module.id,
    template: `
      <div class="terms">
        <main>
          <heading></heading>
          <section>
            <h1>Disclaimer, Terms and Conditions</h1>
            <p>The content of the pages of this application and our other products and services are for your general information and use only. It is subject to change without notice.</p>
            <p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements. This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions. All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>
            <div class="form-group">
              <button class="btn btn-primary" type="button" (click)="acknowledge()">OK</button>
            </div>
          </section>
          <copyright></copyright>
        </main>
      </div>`,
    styleUrls: ["terms.css"]
})
export class TermsOfUseComponent {
    constructor(private location: Location) {
    }

    acknowledge() {
        this.location.back();
    }
}