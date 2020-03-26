import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormGroup, FormControl} from '@angular/forms';
import { BusinessToCreateModel } from 'src/models/BusinessToCreateModel';

@Injectable()



export class BusinessService {
    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }

    fetchBusinesses(): Observable<object> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    addBusiness(data: any) {

        const body = JSON.stringify(data.value);
        console.log(body);

        // return this.http.post('https://localhost:44376/api/negocios', body, {
        //     headers: this.headers
        // });
    }
}
