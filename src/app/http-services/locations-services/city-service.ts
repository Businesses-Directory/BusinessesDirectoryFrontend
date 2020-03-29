import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel } from 'src/models/received-models/location-models/city-model';


const apiRoutes = {
  getCities: `https://localhost:5003/api/cities`,
  getCity: (id: string) => `https://localhost:5003/api/cities/${id}`
};

@Injectable({
  providedIn: 'root'
})

export class CityService {

  constructor(private http: HttpClient) { }

  public getCities(): Observable<HttpResponse<Array<CityModel>>> {
    return this.http.get<Array<CityModel>>(apiRoutes.getCities, { observe: 'response' });
  }
  public getCity(id: string): Observable<HttpResponse<CityModel>> {
    return this.http.get<CityModel>(apiRoutes.getCity(id), {observe: 'response'});
  }
}
