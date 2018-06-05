import { SecurityService } from "./security.service";
import { AppUserAuth } from "./app-user-auth";
import { Component, OnInit } from "@angular/core";
import { AppUser } from "./app-user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  securityObject: AppUserAuth = null;
  user: AppUser = new AppUser();
  constructor(private securityService: SecurityService) {}

  ngOnInit() {}

  login() {
    this.securityService
      .login(this.user)
      .subscribe(resp => (this.securityObject = resp));
  }
}
