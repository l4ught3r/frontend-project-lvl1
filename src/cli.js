import readlineSync from "readline-sync";

export const welcome = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  return (`Hello, ${name}!`);
};

export const foo = () => 0;