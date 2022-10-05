console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "Phoebe";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Oliwia";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
const h1length = hacker1.length;
const h2length = hacker2.length;
if (h1length > h2length) {
    console.log(`The driver has the longest name, it has ${h1length} characters.`);
}
else if (h1length < h2length) {
    console.log(`It seems that the navigator has the longest name, it has ${h2length} characters.`);
}
else if (h1length === h2length) {
    console.log(`Wow, you both have equally long names, ${h1length} characters!`);
}
else {
    console.log("Something's gone wrong");
}
// Iteration 3: Loops
let driverString = ``;
for (let i = 0; i < h1length; i++) {
    const char = hacker1[i];
    driverString += char + " ";
}
console.log(driverString.toUpperCase());

let navString = ``;
for (let j = h2length - 1; j >= 0; j--) {
    const char2 = hacker2[j];
    navString += char2;
}
console.log(navString);