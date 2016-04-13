import {Component, OnInit, EventEmitter, Output} from "angular2/core";
import {Company} from "../models/company";
import {AdminService} from "../services/admin-service";

@Component({
   selector: "companies",
   templateUrl: "dist/admin/company-list.html"
})
export class CompanyListComponent implements OnInit {
   constructor(private _adminSvc: AdminService) { }

   companies: Company[];
   selectedCompany: Company;
   errorMessage: any;

   @Output()
   selectCompanyEvent: EventEmitter<Company> = new EventEmitter();

   ngOnInit() {
      this._adminSvc.getCompanies().subscribe(companies => {
         console.log(companies);
         this.companies = companies;
      }, error => this.errorMessage = <any>error);
   }

   selectCompany(company: Company) {
      this.selectedCompany = company;
      this.selectCompanyEvent.next(company);
   }
}
