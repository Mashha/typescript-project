"use strict";
//this could return null, if you are sure element exists, add ! otherwise make if/else
exports.__esModule = true;
exports.populateUser = exports.showReviewTotal = void 0;
var enums_1 = require("./enums");
var reviewTotalDisplay = document.querySelector("#reviews");
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
function showReviewTotal(value, name, loyaltyUser) {
    var star = enums_1.LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.textContent = "review total ".concat(value.toString(), " | last reviewed by ").concat(name, " ").concat(star);
}
exports.showReviewTotal = showReviewTotal;
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
exports.populateUser = populateUser;
