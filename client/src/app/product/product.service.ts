import { SecurityService } from "./../security/security.service";
import { Observable } from "rxjs";
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
  constructor(private http: HttpClient, private securityService: SecurityService) {}

  getProducts(): Observable<Product[]> {
    let httpOptions = new HttpHeaders().set('Authorization', 'Bearer' + this.securityService.securityObject.bearerToken)
    return this.http.get<Product[]>(API_URL, {headers: httpOptions});
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + "/" + id.toString());
  }

  addProduct(entity: Product): Observable<Product> {
    return this.http.post<Product>(API_URL, entity, httpOptions);
  }

  updateProduct(entity: Product): Observable<Product> {
    return this.http.put<Product>(API_URL, entity, httpOptions);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(
      API_URL + "/" + id.toString(),
      httpOptions
    );
  }
}
