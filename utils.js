"use strict";
//this could return null, if you are sure element exists, add ! otherwise make if/else
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateUser = exports.showReviewTotal = void 0;
const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
function showReviewTotal(value, name, loyaltyUser) {
    let star = loyaltyUser ? "⭐" : "";
    reviewTotalDisplay.textContent = `review total ${value.toString()} | last reviewed by ${name} ${star}`;
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
