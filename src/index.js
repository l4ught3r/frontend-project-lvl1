import readlineSync from "readline-sync";

export const welcome = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
};

export const foo = () => 0;

export const gameRounds = 3;