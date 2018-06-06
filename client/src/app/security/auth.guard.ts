import { SecurityService } from "./security.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private securityService: SecurityService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let claimType: string = next.data["claimType"];
    return (
      this.securityService.securityObject.isAuthenticated &&
      this.securityService.securityObject[claimType]
    );
  }
}
