#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const brainProgression = () => {
  let count = 0;
  while (count < 3) {
    const randomNumber = Math.ceil(Math.random() * 30);
    const randomNumber2 = Math.ceil(Math.random() * 10);
    const Array = [];
    for (let i = 1; i <= 10; i += 1) {
      Array.push(randomNumber + (randomNumber2 * i));
    }
    const randomIndex = Math.ceil(Math.random() * 9);
    const missedNumber = Array[randomIndex];
    Array[randomIndex] = '..';
    const ArrayToString = Array.join(' ');
    console.log(`Question: ${ArrayToString}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === missedNumber) {
      console.log('Correct!');
      count += 1;
    } else return `'${answer}' is wrong answer ;(. Correct answer was '${missedNumber}' \n Let's try again, ${name}!`;
  }
  return (`Congratulations, ${name}!`);
};
console.log(brainProgression());
