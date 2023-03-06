//this could return null, if you are sure element exists, add ! otherwise make if/else

import { LoyaltyUser } from "./enums.js";
import Review  from "./interfaces.js";

const reviewTotalDisplay = document.querySelector("#reviews")!;
const returningUserDisplay = document.querySelector("#returning-user")!;
const userNameDisplay = document.querySelector("#user")!;

// we get void, because we are not returning anything
export function showReviewTotal(
  value: number,
  name: string,
  isLoyalty: LoyaltyUser
): void {
  let star = LoyaltyUser.GOLD_USER ? "⭐" : "";

  reviewTotalDisplay.textContent = `${value.toString()} Review${makeMultiple(
    value
  )} | last reviewed by ${name} ${star}`;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

export function add(firstValue: number, secondValue: number): number {
  return firstValue + secondValue;
}

export function makeMultiple(value: number): string {
  if (value > 1 || value === 0) {
    return "s";
  } else {
    return "";
  }
}

// return is the object itself
export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
