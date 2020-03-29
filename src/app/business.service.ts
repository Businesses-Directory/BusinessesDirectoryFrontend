import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms';
import { BusinessToCreateModel } from 'src/models/BusinessToCreateModel';
import { BusinessToListModel } from 'src/models/received-models/business-models/business-to-list-model';

const apiRoutes = {
  getBusinesses: `https://localhost:5003/api/businesses`
};

@Injectable({
  providedIn: 'root'
})

export class BusinessService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
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
    return this.http.get<Array<BusinessToListModel>>(apiRoutes.getBusinesses, { observe: 'response', params });
  }

  public addBusiness(data: any) {

      const body = JSON.stringify(data.value);
      console.log(body);

      // return this.http.post('https://localhost:44376/api/negocios', body, {
      //     headers: this.headers
      // });
  }
}
