import {Component} from "angular2/core";
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {AdminService} from "../services/admin-service";
import {DashboardComponent} from "./dashboard.component";
import {CompanyDetailComponent} from "./company-detail.component";

@Component({
   selector: 'admin',
   template: `
   <h1>{{title}}</h1>
	 <nav>
		 <a [routerLink]="['Dashboard']">Dashboard</a>
	 </nav>
    
	 <router-outlet></router-outlet>
   `,
   directives: [ROUTER_DIRECTIVES],
   providers: [
      ROUTER_PROVIDERS,
      HTTP_PROVIDERS,
      AdminService
   ]
})
@RouteConfig([
   {
      path: "/admin2",
      name: "Dashboard",
      component: DashboardComponent,
      useAsDefault: true
   },
   {
      path: "/admin2/company/:id",
      name: "CompanyDetail",
      component: CompanyDetailComponent
   }
])
export class AdminComponent {

}