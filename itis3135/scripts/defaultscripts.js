// function scriptTest() {
//     alert("Hey my script is running");
// }

// scriptTest();

function setDate() {
    const date = new Date();
    //3:53pm on Wednesday, 3 November, 2027
    const time = date.toLocaleTimeString("en", { timeStyle: "short"}); 
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const weekday = weekdays[date.getDay()];
    const dateNumber = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const dateString = time + " on " + weekday + ", " + dateNumber + " " + month + ", " + year
    return dateString;
}

function submitFeelings(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // The {name of your company} welcomes you, {user's name} ! We're glad you are doing {how they're doing}!
    const feeling = data.get("feelings");
    const name = data.get("whatName");
    alert("The Anisahnisah company welcomes you, " + name + "! We're glad you are doing " + feeling + "!");

}

function getPolygonName(sides) {
    const polygonNames = [
      "Monogon",
      "Digon",
      "Triangle",
      "Quadrilateral",
      "Pentagon",
      "Hexagon",
      "Heptagon",
      "Octagon",
      "Nonagon",
      "Decagon"
    ];
  
    return polygonNames[sides - 1];
  }

function submitPoly(event) {
    event.preventDefault();
    let favoriteNumber = document.getElementById("favoriteNumber").value;
    // Convert to absolute value and round to nearest integer
    favoriteNumber = Math.round(Math.abs(favoriteNumber));
    let polygonName = getPolygonName(favoriteNumber);
    alert(`The name of the polygon with ${favoriteNumber} sides is: ${polygonName}`);
}

// Function to square a number, related to Alpaca wool production
function squareAlpacaWool() {
    const num = prompt("Enter the amount of Alpaca wool you have:");
    const squared = Math.pow(num, 2);
    alert("If each Alpaca contributes as much wool, you would have " + squared + " units of wool!");
}
  
// Function to calculate the area of a rectangle for an Alpaca pen
function alpacaPenArea() {
    const length = prompt("Enter the length of the Alpaca pen:");
    const width = prompt("Enter the width of the Alpaca pen:");
    const area = length * width;
    alert("The area of your Alpaca pen is " + area + " square feet.");
}
  
// Function to give cute Alpaca name suggestions
    function suggestAlpacaNames() {
    const names = ["Fluffy", "Coco", "Paco", "Wooly", "Misty"];
    const randomIndex = Math.floor(Math.random() * names.length);
    alert("How about naming your Alpaca " + names[randomIndex] + "?");
}
  
// Function to give a fun fact about Alpacas
function alpacaFunFact() {
    const funFacts = [
    "Alpacas hum when they are curious, content, worried, bored, fearful, distressed or cautious.",
    "Alpacas are social animals that live in family groups consisting of a territorial alpha male, females, and their young.",
    "There are two types of Alpacas: Huacaya and Suri.",
    "Alpacas' fleece is flame-resistant."
    ];
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    alert("Alpaca Fun Fact: " + funFacts[randomIndex]);
}

window.onload = (e) => {
    setDate();
    const userForm = document.getElementById("userForm");
    userForm.onsubmit = submitFeelings;

    const polyForm = document.getElementById("polygonForm");
    polyForm.onsubmit = submitPoly;
}