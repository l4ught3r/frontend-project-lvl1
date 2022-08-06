#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".");

const brainPrime = () => {
  let count = 0;
  while (count < 3) {
    const randomNumber = Math.ceil(Math.random() * 100);
    const isNumberPrime = (n) => {
      for (let i = 2; i < n; i += 1) {
        if (n % i === 0) return "no";
      }
      return "yes";
    };
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    if (answer === isNumberPrime(randomNumber)) {
      console.log("Correct!");
      count += 1;
    } else return `'${answer}' is wrong answer ;(. Correct answer was '${isNumberPrime(randomNumber)}' \n Let's try again, ${name}`;
  }
  return (`Congratulations, ${name}!`);
};
console.log(brainPrime());
