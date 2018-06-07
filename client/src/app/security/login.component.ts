import { ActivatedRoute, Router } from "@angular/router";
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
  returnUrl: string;

  constructor(
    private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
  }

  login() {
    this.securityService.login(this.user).subscribe(resp => {
      this.securityObject = resp;
      if (this.returnUrl) {
        this.router.navigateByUrl(this.returnUrl);
      }
    });
  }
}
