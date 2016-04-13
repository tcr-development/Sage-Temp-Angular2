import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from "angular2/router";
import { AdminService } from '../services/admin-service';
import { Company } from '../models/company';

@Component({
   selector: 'company-detail',
   templateUrl: 'dist/admin2/company-detail.component.html'
})
export class CompanyDetailComponent implements OnInit {

   company: Company;
   errorMsg: string;

   constructor(private _adminSvc: AdminService, private _routeParams: RouteParams) {

   }

   ngOnInit() {
      let id = +this._routeParams.get('id');
      this._adminSvc.getCompany(id).subscribe(company => {
         this.company = company;
      }, error => this.errorMsg = <any>error);
   }

   goBack() {
      window.history.back();
   }

   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.company); }
}