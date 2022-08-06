#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log("What number is missing in the progression?");

const brainProgression = () => {
  let count = 0;
  while (count < 3) {
    const randomNumber = Math.ceil(Math.random() * 30);
    const I = Math.ceil(Math.random() * 10);
    const numberArray = [randomNumber, randomNumber + I, randomNumber + (I * 2), randomNumber + (I * 3), randomNumber + (I * 4), randomNumber + (I * 5), randomNumber + (I * 6), randomNumber + (I * 7), randomNumber + (I * 8), randomNumber + (I * 9)];
    const randomIndex = Math.ceil(Math.random() * 9);
    const missedNumber = numberArray[randomIndex];
    numberArray[randomIndex] = "..";
    console.log(`Question: ${numberArray}`);
    const answer = readlineSync.question("Your answer: ");
    if (Number(answer) === missedNumber) {
      console.log("Correct!");
      count += 1;
    } else return `'${answer}' is wrong answer ;(. Correct answer was '${missedNumber}' \n Let's try again, ${name}`;
  }
  return (`Congratulations, ${name}!`);
};
console.log(brainProgression());
