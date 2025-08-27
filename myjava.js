/*let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

// write your code here
const userName = prompt("What is your name?", "joe");
const userPhone = prompt("What is your phone number?", "09876655");
const userEmail = prompt("What is your email?", "tree@example.co.za");

contacts.push({
    name: userName,
    phone: userPhone,
    email: userEmail
});

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);*/

/*
Exercise: Using everything you’ve learned up until this point, write a script that asks a user about the width, height, and length of a box, then calculate and return to the user the volume of this box.

As an example, a box with width = 20, height = 10, and length = 50 will have a volume of 10000 (omitting units, as they are not relevant in this scenario). For now, assume that the values provided by the user are valid numbers, but if you have any ideas on how, you can try to make this script in such a way that it will be resistant to invalid values.
*/
//let userHeight =  window.prompt("Pease fill in the height of this box");
//let userWidth = window.prompt("What is the width?");
//let userLength = window.prompt("What is the length of this box?");
// userHeight = Number(userHeight);
// userWidth = Number(userWidth);
// userLength =  Number(userLength);//

//let volume = userHeight * userWidth * userLength;

//console.log(volume);
/*let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");


let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
}*/



/*let temperature = 35;
let raining = true;

if (temperature > 30) {
  console.log("It’s a hot day!");
}

if (temperature < 10) {
  console.log("It’s a cold day!");
}

if (raining) {
  console.log("Don’t forget your umbrella!");
}



let username = "Keabetswe";
let password = "12345";

if (username === "Keabetswe") {
  // first check username
  if (password === "12345") {
    console.log("Login successful!");
  } else {
    console.log("Incorrect password.");
  }
} else {
  console.log("Username not found.");
}

if (username === "Keabetswe" && password === "12345") {
    console.log("Login successful!");
} else {
    console.log("Login unsuccessful");
}

if (!false) {

}*/
/*let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
  case "a":
    alert("Gate A: empty");
    break;

  case "b":
    alert("Gate B: main prize");
    win = true;
    break;

  case "c":
    alert("Gate C: empty");
    break;

  default:
    alert("No gate " + String(gate));
}*

if (win) {
  alert("Winner!");
}*/

//let number = prompt("Insert number");
//let mesaage = (number > 90 && number < 110) ? "Bingo!": "miss";
//alert(mesaage);


/*let num1 = prompt("Please enter your first number:");
let num2 = prompt("Please enter your second number:");
let mathOperator = prompt("Enter an operater(*, +, -, /):");

let math1 = Number(num1);
let math2= Number(num2);

if (Number.isNaN(math1) || Number.isNaN(math2)) {
  alert("You have entered invalid input.");
}else{
  let result;

  switch (mathOperator) {
    case "+":
      result = math1 + math2;
      break;
    case "-":
      result = math1 - math2;
      break;
    case "*":
      result = math1 * math2;
      break;
    case "/":
      if (math1 === 0) {
        alert("Error: Cannot divide by zero.");
        break;
      }
      result = math1 / math2;
      break;
  }

  if (result !== undefined) {
    alert("Result: " + result);
  }
}*/

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

    case 4:
      console.log("Thursday");

  default:
    console.log("Not a valid day");
}
