import { ProductService } from "./product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.productService
      .getProducts()
      .subscribe(products => (this.products = products));
  }

  addProduct() {
    this.router.navigate(["/productDetail", -1]);
  }
  deleteProduct(id: number) {
    if (confirm("Delete this product?")) {
      this.productService
        .deleteProduct(id)
        .subscribe(
          () => (this.products = this.products.filter(p => p.productId != id))
        );
    }
  }
}
