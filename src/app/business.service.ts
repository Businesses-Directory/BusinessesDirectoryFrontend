import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms';
import { BusinessToCreateModel } from 'src/models/BusinessToCreateModel';
import { BusinessToListModel } from 'src/models/received-models/business-models/business-to-list-model';
import { environment } from 'src/environments/environment';

const apiRoutes = {
  getBusinesses: `/businesses`
};

@Injectable({
  providedIn: 'root'
})

export class BusinessService {
  private headers: HttpHeaders;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  // fetchBusinesses(query?: any): Observable<object> {
  //     return this.http.get('https://jsonplaceholder.typicode.com/posts', {
  //       params: query,
  //     });
  // }

  public getBusinesses(search: string, city: string, type: string): Observable<HttpResponse<Array<BusinessToListModel>>> {
    let params: HttpParams = new HttpParams();
    if (search) {
      params = params.append('search', search);
    }
    if (city) {
      params = params.append('city', city);
    }
    if (type) {
      params = params.append('type', type);
    }
    return this.http.get<Array<BusinessToListModel>>(this.apiUrl + apiRoutes.getBusinesses, { observe: 'response', params });
  }

  public addBusiness(businessToCreate: BusinessToCreateModel): Observable<HttpResponse<BusinessToListModel>> {

      const body = JSON.stringify(businessToCreate);
      console.log(body);

      return this.http.post<BusinessToListModel>(this.apiUrl + apiRoutes.getBusinesses, body, { observe: 'response', headers: this.headers});
  }
}
