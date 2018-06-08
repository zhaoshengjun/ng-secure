import { HttpInterceptorModule } from "./security/http-interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductListComponent } from "./product/product-list.component";
import { ProductDetailComponent } from "./product/product-detail.component";
import { LoginComponent } from "./security/login.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    DashboardComponent,
    ProductListComponent,
    ProductDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
