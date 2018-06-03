import { ProductService } from "./product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { Category } from "../category-list/category";
import { CategoryService } from "../category-list/category.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  originalProduct: Product;
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private proudctService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCategories();
    let id = this.route.snapshot.paramMap.get("id");
    this.createOrLoadProduct(id);
  }
  private getCategories() {
    this.categoryService
      .getCategories()
      .subscribe(categories => (this.categories = categories));
  }

  private createOrLoadProduct(id) {
    if (id === -1) {
      this.initProduct();
    } else {
      this.proudctService.getProduct(id).subscribe(product => {
        this.product = product;
        this.originalProduct = Object.assign({}, product);
      });
    }
  }

  private initProduct() {
    this.product = new Product(new Date(), 1, "www.training.com");
    this.originalProduct = Object.assign({}, this.product);
  }

  saveData() {
    if (this.product.productId) {
      this.proudctService.updateProduct(this.product).subscribe(
        product => {
          this.product = product;
        },
        () => null,
        () => this.dataSaved()
      );
    } else {
      this.proudctService.addProduct(this.product).subscribe(
        product => {
          this.product = product;
        },
        () => null,
        () => this.dataSaved()
      );
    }
  }

  private dataSaved() {
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

  cancel() {
    this.goBack();
  }
}
