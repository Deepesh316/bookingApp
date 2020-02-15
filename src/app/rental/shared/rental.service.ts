import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";

// Injectable decorator marks it as a service that can be injected
@Injectable({
  providedIn: "root"
})
export class RentalService {
  private rental: Rental[] = [
    {
      id: 1,
      title: "Central Apartment",
      city: "New York",
      street: "Times Sqaure",
      category: "apartment",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 3,
      description: "Very nice apartment",
      dailyRate: 34,
      shared: false,
      createdAt: "24/12/2017"
    },
    {
      id: 2,
      title: "Central Apartment 2",
      city: "San Francisco",
      street: "Main street",
      category: "villa",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 2,
      description: "Very nice apartment",
      dailyRate: 12,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      id: 3,
      title: "Central Apartment 3",
      city: "Bratislava",
      street: "Hlavna",
      category: "flat",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 2,
      description: "Very nice apartment",
      dailyRate: 334,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      id: 4,
      title: "Central Apartment 4",
      city: "Berlin",
      street: "Haupt strasse",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 9,
      description: "Very nice apartment",
      dailyRate: 33,
      shared: true,
      createdAt: "24/12/2017"
    }
  ];
  constructor() {}

  /**
   * Get Rental By Id
   * @param rentalId Get rentalId from url params
   */
  public getRentalById(rentalId: number): Observable<Rental> {
    return new Observable<Rental>(observer => {
      setTimeout(() => {
        const foundRental: Rental = this.rental.find(item => {
          return item.id === rentalId;
        });

        observer.next(foundRental); // Emit foundRental
      }, 500);
    });
  }

  /**
   * Get Rental Details
   */
  public getRentals(): Observable<Rental[]> {
    // Expose observable to components by creating observable instance
    // Used arrow function since this (this.rental) context will bind to RentalService
    return new Observable<Rental[]>(observer => {
      setTimeout(() => {
        observer.next(this.rental); // Emitting rental array to components to consume
      }, 1000);
    });
  }
}
