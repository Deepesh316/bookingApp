import { Component, OnInit } from "@angular/core";
import { RentalService } from "../shared/rental.service";
import { Rental } from "../shared/rental.model";

@Component({
  selector: "bkg-rental-list",
  templateUrl: "./rental-list.component.html",
  styleUrls: ["./rental-list.component.scss"]
})
export class RentalListComponent implements OnInit {
  rentals: Rental[] = [];
  // Dependency Injection here ie; rentalService
  constructor(private rentalService: RentalService) {}

  // Called when your component is just before to be instantiated
  // to be created on the screen
  ngOnInit() {
    // returns Observable
    const rentalObservable = this.rentalService.getRentals();

    rentalObservable.subscribe(
      (data: Rental[]) => {
        this.rentals = data;
      },
      error => {},
      () => {}
    );
  }
}
