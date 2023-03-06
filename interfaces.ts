import { LoyaltyUser } from "./enums.js";
import { Price, Country } from "./types.js";

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLineOfAddress: string;
    city: string;
    postcode: number | string;
    country: Country;
  };
  contactDetails: [number, string];
  isAvailable: boolean;
}

