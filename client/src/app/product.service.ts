import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:3000/product";
  constructor(private http:Http) { }

  getProduct(){

    return this.http.get(this.url);
  }
}