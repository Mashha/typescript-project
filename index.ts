import { showReviewTotal, populateUser } from "./utils.js";
import { Permissions, LoyaltyUser } from "./enums.js";
import { getTopTwoReviews } from "./utils.js";
import { Review, Property } from "./interfaces.js";
import MainImage from "./classes.js";

let isLoggedIn: boolean;

const property = document.querySelector(".properties");
const footer = document.querySelector(".footer");
const reviewContainer = document.querySelector(".reviews");
const container = document.querySelector(".container");
const button = document.querySelector("button");

// if object data doesn't match
const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "27-03-2021",
  },
];

const ADMIN = "admin";
const READ_ONLY = "read-only";

const you = {
  firstName: "Bobby",
  lastName: "Brock",
  permissions: Permissions.ADMIN,
  age: 45,
  isReturning: true,
  stayedAt: ["Florida-home", "oman-flat", "tokyo-bungalow"],
};

// functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);

// properties
const properties: Property[] = [
  {
    image:
      "https://images.unsplash.com/photo-1518602164578-cd0074062767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNoYWNrfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Colombian shack",
    price: 45,
    location: {
      firstLineOfAddress: "shack 37",
      city: "bogota",
      postcode: 12345,
      country: "Colombia",
    },
    contactDetails: [+1123456789, "shack@email.com"],
    isAvailable: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Polish cottage",
    price: 30,
    location: {
      firstLineOfAddress: "no 27",
      city: "bogota",
      postcode: 16285,
      country: "Poland",
    },
    contactDetails: [+1123456789, "cottagek@email.com"],
    isAvailable: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    title: "London flat",
    price: 25,
    location: {
      firstLineOfAddress: "flat 15",
      city: "bogota",
      postcode: 95789,
      country: "United Kingdom",
    },
    contactDetails: [+1123456789, "flat@email.com"],
    isAvailable: true,
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/327864037.jpg?k=710cf41398b9086276026e780d85c9698fd420b37dc60262228e42c2999e8ffb&o=&hp=1",
    title: "Malia hotel",
    price: 35,
    location: {
      firstLineOfAddress: "room 4",
      city: "Malia",
      postcode: 45334,
      country: "Malaysia",
    },
    contactDetails: [+1123456789, "lee34@email.com"],
    isAvailable: false,
  },
];

let authorityStatus: any;
isLoggedIn = true;

function showDetails(
  authorityStatus: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (authorityStatus) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

for (let i = 0; i < properties.length; i++) {
  console.log(properties[i]);
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = properties[i].title;
  const img = document.createElement("img");
  img.src = properties[i].image;
  card.append(img);
  property.append(card);
  showDetails(isLoggedIn, card, properties[i].price);
}

let count = 0;
function addReviews(array: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.textContent = `${topTwo[i].stars} stars from ${topTwo[i].name}`;
      reviewContainer.append(card);
    }
    container.removeChild(button);
  }
}

button.addEventListener("click", () => addReviews(reviews));

// use your location, your current time, and the current temperature of your
// location
let currentLocation: [string, string, number] = ["Ljubljana", "09:48", 3];
footer.textContent = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`;


let yourMainProperty = new MainImage(
  "https://static.independent.co.uk/2021/09/29/12/iStock-176431489.jpg?quality=75&width=1200&auto=webp",
  "Italian house",
  [
    {
      name: "Olive",
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: "12-04-2021",
    },
  ]
);

const mainImageContainer = document.querySelector(".main-image");
const image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
mainImageContainer.appendChild(image);
