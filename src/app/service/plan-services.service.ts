import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Plan} from '../model/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanServicesService {

  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:5252/plans";
  }

  getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;
  }

  getSearchUrl(field: string, value: string): string {
    return this.baseUrl + "/" + field + "/" + value;
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  getAllPlans(): Observable<Plan[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }

  // searchPlans(value: number): Observable<Plan[]> {
  //   return this.http.get(this.getSearchUrl(value)).pipe(
  //     map(data => data.json())
  //   );
  // }
  
  getPlanById(id: number): Observable<Plan> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }

  payBill(pid:number):Observable<Plan>{
    let surl:string= this.payBill+"/"+pid;
      return this.http.get(surl).pipe(
        map(this.extractBillData)
        
      );
       
  }
  extractBillData(res:Response){
    let body=res.json();
    return body;
  }
  handleErrorPromise(error:Response){
    console.error(error +"Post Error occurred");
    return Promise.reject(error +"Post Error occurred");
  }
}
