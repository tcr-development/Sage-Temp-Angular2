import {Component} from "angular2/core";
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Company} from "../models/company";
import {AdminService} from "../services/admin-service";
import {CompanyListComponent} from "./company-list.component";
import {CompanyDetailComponent} from "./company-detail.component";

@Component({
   selector: "my-app",
   templateUrl: "dist/admin/admin.component.html",
   providers: [HTTP_PROVIDERS, AdminService],
   directives: [CompanyListComponent, CompanyDetailComponent]
})
export class AdminComponent {
   selectedCompany: Company;

   handleSelectCompany(evt: any) {
      this.selectedCompany = evt;
   }
}
