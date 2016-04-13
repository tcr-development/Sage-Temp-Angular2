import {Component, Input, OnInit} from "angular2/core";
import {AdminService} from "../services/admin-service";
import {Company} from "../models/company";

@Component({
   selector: "company-detail",
   templateUrl: "dist/admin/company-detail.html"
})
export class CompanyDetailComponent implements OnInit {
   constructor(private _adminSvc: AdminService) { }

   @Input() company: Company;

   ngOnInit() {

   }

   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.company); }
}