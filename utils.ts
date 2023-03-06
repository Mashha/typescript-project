//this could return null, if you are sure element exists, add ! otherwise make if/else

import { LoyaltyUser } from "./enums";

const reviewTotalDisplay = document.querySelector("#reviews")!;
const returningUserDisplay = document.querySelector("#returning-user")!;
const userNameDisplay = document.querySelector("#user")!;

export function showReviewTotal(value: number, name: string, loyaltyUser:LoyaltyUser) {
    let star = LoyaltyUser.GOLD_USER ? "⭐" : "";
  
    reviewTotalDisplay.textContent = `review total ${value.toString()} | last reviewed by ${name} ${star}`;
  }

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
      returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
  }

