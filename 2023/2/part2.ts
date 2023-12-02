import fs from 'node:fs';

const input = fs.readFileSync(__dirname + '/input', 'utf-8');

const games = input.split('\n');

let sum = 0;

for (let i = 0; i < games.length; i += 1) {
  const minimums = {
    red: 0,
    blue: 0,
    green: 0,
  };

  let game = games[i];

  game = game.split(": ")[1];

  const handfuls = game.split("; ");

  for (let handful of handfuls) {
    const groups = handful.split(", ");

    for (let group of groups) {
      const [amountString, color] = group.split(" ");

      const amount = Number(amountString);

      minimums[color] = Math.max(minimums[color], amount);
    }
  }

  let power = 1;
  for (const color in minimums) {
    power *= minimums[color];
  }

  sum += power;
}

console.log(sum);
