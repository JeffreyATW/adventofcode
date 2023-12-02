import fs from 'node:fs';

const input = fs.readFileSync(__dirname + '/input', 'utf-8');

const games = input.split('\n');

const colorMaxes = {
  red: 12,
  green: 13,
  blue: 14
};

let sum = 0;

gameloop:
for (let i = 0; i < games.length; i += 1) {
  let game = games[i];

  game = game.split(": ")[1];

  const handfuls = game.split("; ");

  for (let handful of handfuls) {
    const groups = handful.split(", ");

    for (let group of groups) {
      const [amountString, color] = group.split(" ");

      const amount = Number(amountString);

      if (amount > colorMaxes[color]) {
        continue gameloop;
      }
    }
  }

  sum += i + 1;
}

console.log(sum);
