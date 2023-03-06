import { LoyaltyUser } from "./enums.js";

export default interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
  }