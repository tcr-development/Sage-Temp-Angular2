import {Component, Input, OnInit} from "angular2/core";
import {HTTP_PROVIDERS} from 'angular2/http';
import {AdminService} from "../services/admin-service";
import {Company} from '../models/company';

@Component({
   selector: 'edit-company',
   templateUrl: 'dist/admin3/edit.company.component.html',
   providers: [
      HTTP_PROVIDERS,
      AdminService
   ]
})
export class EditCompanyComponent implements OnInit {
   @Input("id")
   companyid: number = window["Globals"].companyId;

   title: "Edit Company";

   company: Company;
   errorMsg: string;

   constructor(private _adminSvc: AdminService) { }

   ngOnInit() {
      this._adminSvc.getCompany(this.companyid).subscribe(company => {
         this.company = company;
      }, error => this.errorMsg = <any>error);
   }

   goBack() {
      window.history.back();
   }

   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.company); }
}