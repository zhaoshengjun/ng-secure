import { SecurityService } from "./security/security.service";
import { AppUserAuth } from "./security/app-user-auth";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Training Company";
  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }
  logtout() {
    this.securityService.logout();
  }
}
