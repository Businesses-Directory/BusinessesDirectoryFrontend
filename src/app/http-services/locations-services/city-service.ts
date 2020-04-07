import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel } from 'src/models/received-models/location-models/city-model';
import { environment } from 'src/environments/environment';


const apiRoutes = {
  getCities: `/cities`,
  getCity: (id: string) => `/cities/${id}`
};

@Injectable({
  providedIn: 'root'
})

export class CityService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

  public getCities(): Observable<HttpResponse<Array<CityModel>>> {
    return this.http.get<Array<CityModel>>(this.apiUrl + apiRoutes.getCities, { observe: 'response' });
  }
  public getCity(id: string): Observable<HttpResponse<CityModel>> {
    return this.http.get<CityModel>(this.apiUrl + apiRoutes.getCity(id), {observe: 'response'});
  }
}
