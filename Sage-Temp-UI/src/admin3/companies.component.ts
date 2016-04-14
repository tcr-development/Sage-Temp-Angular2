import {Component, OnInit} from "angular2/core";
import {Company} from "../models/company";
import {AdminService} from "../services/admin-service";

@Component({
   selector: "companies",
   templateUrl: "dist/admin3/companies.component.html"
})
export class CompaniesComponent implements OnInit {
   companies: Company[] = [];
   errorMsg: string;

   constructor(private _adminSvc: AdminService) { }

   ngOnInit() {
      this._adminSvc.getCompanies().subscribe(companies => {
         this.companies = companies;
      }, error => this.errorMsg = <any>error);
   }
}