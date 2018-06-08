import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { AppUserAuth } from "./app-user-auth";
import { Injectable } from "@angular/core";
import { AppUser } from "./app-user";
import { tap } from "rxjs/operators";

const API_URL = "http://localhost:5000/security/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
  constructor(private http: HttpClient) {}

  resetSecurityObject() {
    let emptyObject: AppUserAuth = {
      userName: "",
      bearerToken: "",
      isAuthenticated: false,
      claims: []
    };
    this.securityObject = emptyObject;
    localStorage.removeItem("bearerToken");
  }

  login(entity: AppUser): Observable<AppUserAuth> {
    this.resetSecurityObject();
    return this.http
      .post<AppUserAuth>(API_URL + "login", entity, httpOptions)
      .pipe(
        tap(resp => {
          Object.assign(this.securityObject, resp);
          localStorage.setItem("bearerToken", this.securityObject.bearerToken);
        })
      );
  }

  logout() {
    this.resetSecurityObject();
  }

  private isClaimValid(claimType: string, claimValue?: string): boolean {
    let ret: boolean = false;
    let auth: AppUserAuth = null;

    auth = this.securityObject;
    if (auth) {
      if (claimType.indexOf(":") >= 0) {
        let words: string[] = claimType.split(":");
        claimType = words[0].toLowerCase();
        claimValue = words[1];
      } else {
        claimType = claimType.toLowerCase();
        claimValue = claimValue ? claimValue : "true";
      }

      ret =
        auth.claims.find(
          c =>
            c.claimType.toLowerCase() == claimType && c.claimValue == claimValue
        ) != null;
    }
    return ret;
  }

  hasClaim(claimType: any, claimValue?: any) {
    let ret = false;

    if (typeof claimType === "string") {
      // this should handle:
      //  *hasClaim="'claimType'"
      //  *hasClaim="'claimType:claimValue'"
      return this.isClaimValid(claimType, claimValue);
    } else {
      // This shoudl handle
      //  *hasClaim="['claimType', 'claimType:value','claimType']"
      let claims: string[] = claimType;
      if (claims) {
        for (let index = 0; index < claims.length; index++) {
          ret = this.isClaimValid(claims[index]);
          // if one is true, then let it pass
          if (ret) {
            break;
          }
        }
      }
    }
    return ret;
  }
}
