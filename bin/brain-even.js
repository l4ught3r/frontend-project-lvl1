#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

const brainEven = () => {
  let count = 0;
  while (count < 3) {
    const randomNumber = Math.ceil(Math.random() * 30);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    if (randomNumber % 2 === 0) {
      if (answer === "no") {
        return (`'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name}!`);
      }
      if (answer === "yes") {
        count += 1;
        console.log("Correct!");
      } else return (`You must answer "yes" or "no", ${name}!`);
    }
    if (randomNumber % 2 !== 0) {
      if (answer === "yes") {
        return (`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name}!`);
      }
      if (answer === "no") {
        count += 1;
        console.log("Correct!");
      } else return (`You must answer "yes" or "no", ${name}!`);
    }
  }
  return (`Congratulations, ${name}!`);
};
console.log(brainEven());
