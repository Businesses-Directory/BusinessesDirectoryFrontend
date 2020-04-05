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
private api: string;
  constructor(private http: HttpClient) {
    this.api = environment.apiUrl;
  }

  public getTypes(): Observable<HttpResponse<Array<BusinessTypeModel>>> {
    return this.http.get<Array<BusinessTypeModel>>(this.api + apiRoutes.getTypes, { observe: 'response' });
  }
  public getType(id: string): Observable<HttpResponse<BusinessTypeModel>> {
    return this.http.get<BusinessTypeModel>(this.api + apiRoutes.getType(id), {observe: 'response'});
  }
}
