import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { BusinessToCreateModel } from 'src/models/business-to-create-model';
@Injectable()



export class ProductService {
    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }

    fetchProducts(): Observable<object> {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    deleteProduct(id: string) {
        return this.http.delete('https://localhost:44376/api/products/' + id);
    }

    updateProduct(newName: string, id: string) {
        return this.http.patch('https://localhost:44376/api/products/' + id, {
            newName
        });
    }

    addProduct(data: BusinessToCreateModel) {
        const body = JSON.stringify(data);

        return this.http.post('https://localhost:44376/api/negocios', body, {
            headers: this.headers
        });
    }
}
