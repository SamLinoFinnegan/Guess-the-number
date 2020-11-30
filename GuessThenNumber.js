
let numberToBeGuessed = null;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
    name = prompt("Whats your name?");
}

alert("Welcome to Guess the Number " + name + "!!");

numberToBeGuessed = Math.floor(Math.random() * (max - min)) + min;
console.log("hint..the number is : " + numberToBeGuessed);

while (guess !== numberToBeGuessed) {
    guess = parseInt(prompt("Type in a number 0 till 25: "));
    alert("your guess is: " + guess);
    if (guess > numberToBeGuessed) {
        alert("Your guess was too high, try again");
    } else if (guess < numberToBeGuessed) {
        alert("Your guess was too low, try again");
    } else {
        alert("Good job the number is correct " + guess);
        alert(
            "Thats it for now, see you later"
        );
    }
}
