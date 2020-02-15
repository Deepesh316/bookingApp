import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RentalService } from "../shared/rental.service";
import { Rental } from "../shared/rental.model";

@Component({
  selector: "bkg-rental-detail",
  templateUrl: "./rental-detail.component.html",
  styleUrls: ["./rental-detail.component.scss"]
})
export class RentalDetailComponent implements OnInit {
  rental: Rental;
  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRental(+params.rentalId);
    });
  }

  /**
   * Returns object which contains id same as url route params
   * @param rentalId Get from route params
   */
  getRental(rentalId: number) {
    this.rentalService.getRentalById(rentalId).subscribe((rental: Rental) => {
      this.rental = rental;
    });
  }
}
