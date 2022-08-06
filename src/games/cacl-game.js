#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import startGame from '../index.js';
import { randomNum } from '../functions.js';

const info = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const mathematicalExpression = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  if (operator === '*') {
    return a * b;
  } return null;
};

const calcGame = () => {
  const num1 = randomNum(1, 30);
  const num2 = randomNum(1, 30);
  const randomOperator = operators[randomNum(0, operators.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const rightAnswer = String(mathematicalExpression(num1, num2, randomOperator));
  return cons(question, rightAnswer);
};

export default () => startGame(info, calcGame);
