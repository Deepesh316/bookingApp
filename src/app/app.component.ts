import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  AppTitle = "Booking Application";
  clickHandler() {
    alert("Clicked Me!!");
  }
}
