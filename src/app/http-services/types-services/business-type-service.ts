import { Injectable } from '@angular/core';
import { BusinessTypeModel } from 'src/models/received-models/types-models/business-type-model';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiRoutes = {
  getTypes: `https://localhost:5003/api/businesstypes`,
  getType: (id: string) => `https://localhost:5003/api/businesstypes/${id}`
};

@Injectable({
  providedIn: 'root'
})

export class BusinessTypeService {

  constructor(private http: HttpClient) { }

  public getTypes(): Observable<HttpResponse<Array<BusinessTypeModel>>> {
    return this.http.get<Array<BusinessTypeModel>>(apiRoutes.getTypes, { observe: 'response' });
  }
  public getType(id: string): Observable<HttpResponse<BusinessTypeModel>> {
    return this.http.get<BusinessTypeModel>(apiRoutes.getType(id), {observe: 'response'});
  }
}
