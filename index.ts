import { showReviewTotal, populateUser } from "./utils.js";
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

// properties
const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLineOfAddress: string;
    city: string;
    postcode: number;
    country: string;
  };
  contactDetails: string;
  isAvailable: boolean;
}[] = [
  {
    image:
      "https://images.unsplash.com/photo-1570793005386-840846445fed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Colombian shack",
    price: 45,
    location: {
      firstLineOfAddress: "shack 37",
      city: "bogota",
      postcode: 12345,
      country: "Colombia",
    },
    contactDetails: "shack@email.com",
    isAvailable: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    title: "Polish cottage",
    price: 34,
    location: {
      firstLineOfAddress: "no 27",
      city: "bogota",
      postcode: 16285,
      country: "Poland",
    },
    contactDetails: "cottagek@email.com",
    isAvailable: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    title: "London flat",
    price: 23,
    location: {
      firstLineOfAddress: "flat 15",
      city: "bogota",
      postcode: 95789,
      country: "United Kingdom",
    },
    contactDetails: "flat@email.com",
    isAvailable: true,
  },
];
