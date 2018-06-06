import { AuthGuard } from "./security/auth.guard";
import { LoginComponent } from "./security/login.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { ProductDetailComponent } from "./product/product-detail.component";
import { ProductListComponent } from "./product/product-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "products",
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { claimType: "canAccessProducts" }
  },
  {
    path: "productDetail/:id",
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
    data: { claimType: "canAccessProducts" }
  },
  {
    path: "categories",
    component: CategoryListComponent,
    canActivate: [AuthGuard],
    data: { claimType: "canAccessCategories" }
  },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "**", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
