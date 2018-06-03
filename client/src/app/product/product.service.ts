import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./product";

const API_URL = "http://localhost:5000/product";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(API_URL);
  }

  getProduct(id: number) {
    return this.http.get(API_URL + "/" + id.toString());
  }

  addProduct(entity: Product) {
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateProduct(entity: Product) {
    return this.http.put(API_URL, entity, httpOptions);
  }

  deleteProduct(id: number) {
    return this.http.delete(API_URL + "/" + id.toString(), httpOptions);
  }
}
