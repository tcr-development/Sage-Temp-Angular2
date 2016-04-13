import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {Company} from "../models/company";
import {AdminService} from "../services/admin-service";

@Component({
   selector: "companies",
   templateUrl: "dist/admin2/companies.component.html"
})
export class CompaniesComponent implements OnInit {
   companies: Company[] = [];
   errorMsg: string;

   constructor(private _router: Router, private _adminSvc: AdminService) { }

   ngOnInit() {
      this._adminSvc.getCompanies().subscribe(companies => {
         this.companies = companies;
      }, error => this.errorMsg = <any>error);
   }

   gotoDetail(company: Company) {
      let link = ["CompanyDetail", { id: company.id }];
      this._router.navigate(link);
   }
}