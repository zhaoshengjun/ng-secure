import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dangerousCode = 'Template<script>alert("I am dangeours")</script> <b>Syntax</b>';
}
