import startGame from '../index.js';
import randomNum from '../functions.js';

const info = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const primeGame = () => {
  const num1 = randomNum(1, 100);
  const question = `${num1}`;
  const rightAnswer = isPrime(num1) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => startGame(info, primeGame);
