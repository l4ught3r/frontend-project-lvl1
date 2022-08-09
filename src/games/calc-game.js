import startGame from '../index.js';
import randomNum from '../functions.js';

const info = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const doTheCalculation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const calcGame = () => {
  const num1 = randomNum(1, 30);
  const num2 = randomNum(1, 10);
  const randomOperator = operators[randomNum(0, operators.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const rightAnswer = String(doTheCalculation(num1, num2, randomOperator));
  return [question, rightAnswer];
};

export default () => startGame(info, calcGame);
