// question 1

console.log("----------question no # 1----------")

console.log("question no # 1");
var itemsArray = [
  {
    name: "juice",
    price: "50",
    quantity: "3",
  },
  {
    name: "cookie",
    price: "30",
    quantity: "9",
  },
  {
    name: "shirt",
    price: "880",
    quantity: "1",
  },
  {
    name: "pen",
    price: "100",
    quantity: "2",
  },
];

let a = itemsArray[0].price * itemsArray[0].quantity;
let b = itemsArray[1].price * itemsArray[1].quantity;
let c = itemsArray[2].price * itemsArray[2].quantity;
let d = itemsArray[3].price * itemsArray[3].quantity;

console.log("price of first item: " + a);
console.log("price of second item: " + b);
console.log("price of third item: " + c);
console.log("price of fourth item: " + d);
console.log("-------Total Price-------");
console.log("TOTAL PRICE: " + (a + b + c + d));

console.log("----------question no # 2----------")

// question 2

console.log("question no # 2");

let personalInfo = {
  name: "etc",
  email: "etc@gmail.com",
  password: "etc",
  age: "12",
  gender: "male",
  city: "karachi",
  country: "pakistan",
};

console.log(personalInfo.hasOwnProperty("age"));
console.log(personalInfo.hasOwnProperty("country"));
console.log(personalInfo.hasOwnProperty("firstName"));
console.log(personalInfo.hasOwnProperty("lastName"));

console.log("----------question no # 3----------")

// question 3

console.log("question no # 3");

function Person(name, email, password, gender, city, country) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.gender = gender;
  this.city = city;
  this.country = country;
}

let personalBio = new Person(
  "Muhammad",
  "muhammad@gmail.com",
  "etc",
  "male",
  "karachi",
  "pakistan"
);

let personalBio2 = new Person(
  "Kashan",
  "kashan@gmail.com",
  "etc",
  "male",
  "karachi",
  "pakistan"
);

console.log(personalBio);
console.log(personalBio2);

// question 4

console.log("----------question no # 4----------")
console.log("note: question # 4 only give you data when you submit the data")




function CheckPopulation(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

function getValues() {
  let a = document.getElementById("education");
  let b = document.getElementById("profession");
  let c;
  let d;

  if (document.getElementById("male").checked) {
    c = document.getElementById("male").value;
    console.log(c);
  } else if (document.getElementById("female").checked) {
    d = document.getElementById("female").value;
    console.log(d);
  }

  const Peoples = new CheckPopulation(
    "Muhammad hurera",
    `${document.getElementById("male").checked ? c : d}`,
    "mehmoodabad",
    `${a.value}`,
    `${b.value}`
  );
  console.log(Peoples);
}
