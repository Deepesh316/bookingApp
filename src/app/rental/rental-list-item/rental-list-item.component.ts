import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "bkg-rental-list-item",
  templateUrl: "./rental-list-item.component.html",
  styleUrls: ["./rental-list-item.component.scss"]
})
export class RentalListItemComponent implements OnInit {
  @Input() currentRental: any; // For passing data from renatal-list to rental-list-item (Parent to Child)

  constructor() {}

  ngOnInit() {}
}
