import { CategoryListComponent } from "./category-list/category-list.component";
import { ProductDetailComponent } from "./product/product-detail.component";
import { ProductListComponent } from "./product/product-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "products", component: ProductListComponent },
  { path: "productDetail/:id", component: ProductDetailComponent },
  { path: "categories", component: CategoryListComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "**", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
