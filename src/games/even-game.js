#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import { randomNum } from '../functions.js';

const info = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const question = randomNum(2, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export const even = () => startGame(info, evenGame);
export const foo = () => 0;
