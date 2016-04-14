import {Component} from "angular2/core";
import {HTTP_PROVIDERS}    from 'angular2/http';
import {AdminService} from "../services/admin-service";
import {CompaniesComponent} from "./companies.component";

@Component({
   selector: 'admin',
   template: `
   <h1>{{title}}</h1>
   <companies></companies>
   `,
   directives: [CompaniesComponent],
   providers: [
      HTTP_PROVIDERS,
      AdminService
   ]
})
export class AdminComponent {

}