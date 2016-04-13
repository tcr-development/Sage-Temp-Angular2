import { Injectable } from "angular2/core";
import {Http, Response} from "angular2/http"
import { Company } from "../models/company";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminService {
   private _url = window["Globals"].baseUrl + "api/adminapi/";

   constructor(private http: Http) { }

   getCompanies(): Observable<Company[]> {
      return this.http.get(this._url + "getCompanies").map(res => <Company[]>res.json()).catch(this.handleError);
   }

   getCompany(id: number) : Observable<Company> {
      return this.http.get(this._url + "GetCompany/" + id).map(res => <Company>res.json()).catch(this.handleError);
   }

   private handleError(error: Response) {
      // in a real world app, we may send the error to some remote logging infrastructure
      // instead of just logging it to the console
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
   }
}
