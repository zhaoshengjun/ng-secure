import { AppUserAuth } from "./app-user-auth";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
  constructor() {}

  resetSecurityObject() {
    let emptyObject: AppUserAuth = {
      userName: "",
      bearerToken: "",
      isAuthenticated: false,
      canAccessProduct: false,
      canAddProduct: false,
      canSaveProduct: false,
      canAccessCategories: false,
      canAddCategory: false
    };
    this.securityObject = emptyObject;
    localStorage.removeItem("bearerToken");
  }
}
