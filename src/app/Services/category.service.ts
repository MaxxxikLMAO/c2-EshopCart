import { Injectable } from '@angular/core';
import { AccessToken } from 'src/AccessToken.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../../klic/Token';
import {Category} from '../../Category.model';
import {CategoryInfo} from '../../CategoryInfo.model';
import {Product} from '../../Product.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private httpClient: HttpClient) {

   }

   getCategories() {
     const headers = new HttpHeaders().set('access-token', Token.access_token);
     return this.httpClient.get<Category[]>('api/categories/', {headers});
   }

   getCategoryById(id: number) {
    const headers = new HttpHeaders().set('access-token', Token.access_token);
    return this.httpClient.get<CategoryInfo>('api/categories/' + id, {headers});
  }

  getProductById(id: number) {
    const headers = new HttpHeaders().set('access-token', Token.access_token);
    return this.httpClient.get<Product>('api/products/' + id, {headers});
  }
}

