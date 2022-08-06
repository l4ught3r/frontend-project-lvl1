#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import { randomNum } from '../functions.js';
import startGame from '../index.js';

const info = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  for (let i = 1000; i >= 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 0;
};

const gcdGame = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcd(num1, num2));

  return cons(question, rightAnswer);
};

export default () => startGame(info, gcdGame);
