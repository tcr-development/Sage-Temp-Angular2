import {Component} from "angular2/core";
import {CompaniesComponent} from "./companies.component";

@Component({
   selector: "dashboard",
   template: `<companies></companies>`,
   directives: [CompaniesComponent]
})
export class DashboardComponent {
   
}