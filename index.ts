import { showReviewTotal, populateUser } from "./utils";
let isOpen: boolean;

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];


const you: {
  firstName: string;
  lastName: string;
  age: number;
  isReturning: boolean;
  stayedAt: string[];
} = {
  firstName: "Bobby",
  lastName: "Brock",
  age: 45,
  isReturning: true,
  stayedAt: ["Florida-home", "oman-flat", "tokyo-bungalow"],
};


// functions 
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);


//image,title,price per night, first line of address, city, postcode,country, contact details, available
