//this could return null, if you are sure element exists, add ! otherwise make if/else

const reviewTotalDisplay = document.querySelector("#reviews")!;
const returningUserDisplay = document.querySelector("#returning-user")!;
const userNameDisplay = document.querySelector("#user")!;

export function showReviewTotal(value: number, name: string, loyaltyUser: boolean) {
    let star = loyaltyUser ? "⭐" : "";
  
    reviewTotalDisplay.textContent = `review total ${value.toString()} | last reviewed by ${name} ${star}`;
  }

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
      returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
  }

