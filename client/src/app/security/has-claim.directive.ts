import { SecurityService } from "./security.service";
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[hasClaim]"
})
export class HasClaimDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private securityService: SecurityService
  ) {}

  @Input()
  set hasClaim(claimType: any) {
    if (this.securityService.hasClaim(claimType)) {
      // add tempalte to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
