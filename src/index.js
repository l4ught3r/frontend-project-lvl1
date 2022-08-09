import readlineSync from 'readline-sync';

const gameRounds = 3;

const startGame = (info, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(info);
  for (let round = 0; round < gameRounds; round += 1) {
    const generation = gameData();
    const question = generation[0];
    const rightAnswer = generation[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isRightAnswer = userAnswer === rightAnswer;

    if (isRightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
