#!/usr/bin/env node
import readlineSync from "readline-sync";
import { gcd } from "../src/functions.js";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log("Find the greatest common divisor of given numbers.");

const brainGcd = () => {
  let count = 0;
  while (count < 3) {
    const firstNumber = Math.ceil(Math.random() * 20);
    const secondNumber = Math.ceil(Math.random() * 20);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = readlineSync.question("Your answer: ");
    if (Number(answer) === gcd(firstNumber, secondNumber)) {
      console.log("Correct!");
      count += 1;
    } else return `'${answer}' is wrong answer ;(. Correct answer was '${gcd(firstNumber, secondNumber)}' \n Let's try again, ${name}`;
  }
  return (`Congratulations, ${name}!`);
};
console.log(brainGcd());
