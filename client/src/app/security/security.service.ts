import { LOGIN_MOCKS } from "./login-mocks";
import { AppUserAuth } from "./app-user-auth";
import { Injectable } from "@angular/core";
import { AppUser } from "./app-user";

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

  login(entity: AppUser) {
    this.resetSecurityObject();
    Object.assign(
      this.securityObject,
      LOGIN_MOCKS.find(
        user => user.userName.toLowerCase() === entity.userName.toLowerCase()
      )
    );
    if (this.securityObject.userName !== "") {
      localStorage.setItem("bearerToken", this.securityObject.bearerToken);
    }
  }

  logout() {
    this.resetSecurityObject();
  }
}
