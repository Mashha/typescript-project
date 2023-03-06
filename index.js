"use strict";
exports.__esModule = true;
var utils_js_1 = require("./utils.js");
var isOpen;
var property = document.querySelector(".properties");
var footer = document.querySelector(".footer");
var reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: true,
        date: "01-04-2021"
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: false,
        date: "28-03-2021"
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: true,
        date: "27-03-2021"
    },
];
var you = {
    firstName: "Bobby",
    lastName: "Brock",
    age: 45,
    isReturning: true,
    stayedAt: ["Florida-home", "oman-flat", "tokyo-bungalow"]
};
// functions
(0, utils_js_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_js_1.populateUser)(you.isReturning, you.firstName);
// properties
var properties = [
    {
        image: "https://images.unsplash.com/photo-1518602164578-cd0074062767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNoYWNrfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Colombian shack",
        price: 45,
        location: {
            firstLineOfAddress: "shack 37",
            city: "bogota",
            postcode: 12345,
            country: "Colombia"
        },
        contactDetails: [+1123456789, "shack@email.com"],
        isAvailable: true
    },
    {
        image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        title: "Polish cottage",
        price: 34,
        location: {
            firstLineOfAddress: "no 27",
            city: "bogota",
            postcode: 16285,
            country: "Poland"
        },
        contactDetails: [+1123456789, "cottagek@email.com"],
        isAvailable: false
    },
    {
        image: "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
        title: "London flat",
        price: 23,
        location: {
            firstLineOfAddress: "flat 15",
            city: "bogota",
            postcode: 95789,
            country: "United Kingdom"
        },
        contactDetails: [+1123456789, "flat@email.com"],
        isAvailable: true
    },
];
for (var i = 0; i < properties.length; i++) {
    console.log(properties[i]);
    var card = document.createElement("div");
    card.classList.add("card");
    card.textContent = properties[i].title;
    var img = document.createElement("img");
    img.src = properties[i].image;
    card.append(img);
    property.append(card);
}
// use your location, your current time, and the current temperature of your
// location
var currentLocation = ["Ljubljana", "09:48", 3];
footer.textContent = "".concat(currentLocation[0], " ").concat(currentLocation[1], " ").concat(currentLocation[2], "\u00B0");
