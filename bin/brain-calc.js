#!/usr/bin/env node
import readlineSync from "readline-sync";
import { gameRounds } from "../src/index.js";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log("What is the result of the expression?");

const brainCalc = () => {
  let count = 0;
  while (count < gameRounds) {
    const firstNumber = Math.ceil(Math.random() * 30);
    const secondNumber = Math.ceil(Math.random() * 10);
    const operator = "+-*";
    const randomIndex = Math.floor(Math.random() * operator.length);
    const randomOperator = operator[randomIndex];
    let correctAnswer = 0;
    const isCorrectAnswer = () => {
      if (randomOperator === "+") {
        correctAnswer = firstNumber + secondNumber;
      }
      if (randomOperator === "-") {
        correctAnswer = firstNumber - secondNumber;
      }
      if (randomOperator === "*") {
        correctAnswer = firstNumber * secondNumber;
      }
      return correctAnswer;
    };
    console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber}`);
    const answer = readlineSync.question("Your answer: ");
    if (Number(answer) === isCorrectAnswer()) {
      console.log("Correct!");
      count += 1;
    } else return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}' \n Let's try again, ${name}!`;
  }
  return (`Congratulations, ${name}!`);
};
console.log(brainCalc());
