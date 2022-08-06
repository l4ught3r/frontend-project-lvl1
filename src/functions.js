export const randomNumber = Math.round(Math.random(100) * 100);

export const gcd = (a, b) => {
  for (let i = 1000; i >= 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 0;
};

export const foo = () => 0;
