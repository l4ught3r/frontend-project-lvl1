#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import { randomNum } from '../functions.js';

const info = 'What number is missing in the progression?';

const arraySize = 10;

const progressionGame = () => {
  const num1 = randomNum(1, 50);
  const step = randomNum(2, 10);
  const array = [];
  for (let i = 1; i <= arraySize; i += 1) {
    array.push(num1 + step * i);
  }

  const lostNum = randomNum(1, arraySize);
  const rightAnswer = String(array[lostNum]);
  array[lostNum] = '..';
  const question = `${array.join(' ')}`;

  return cons(question, rightAnswer);
};

export const progression = () => startGame(info, progressionGame);
export const foo = () => 0;
