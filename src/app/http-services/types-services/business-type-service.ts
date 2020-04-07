import { Injectable } from '@angular/core';
import { BusinessTypeModel } from 'src/models/received-models/types-models/business-type-model';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiRoutes = {
  getTypes: `/businesstypes`,
  getType: (id: string) => `/businesstypes/${id}`
};

@Injectable({
  providedIn: 'root'
})

export class BusinessTypeService {
  private apiUrl: any;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

  public getTypes(): Observable<HttpResponse<Array<BusinessTypeModel>>> {
    return this.http.get<Array<BusinessTypeModel>>(this.apiUrl + apiRoutes.getTypes, { observe: 'response' });
  }
  public getType(id: string): Observable<HttpResponse<BusinessTypeModel>> {
    return this.http.get<BusinessTypeModel>(this.apiUrl + apiRoutes.getType(id), {observe: 'response'});
  }
}
