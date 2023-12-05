import fs from "node:fs";

const numberRegex = /\d+/g;

const input = fs.readFileSync(__dirname + "/input", "utf-8");

const cards = input.split("\n");

let sum = 0;

for (const card of cards) {
  const numbers = card.split(": ")[1];

  const [winningString, myString] = numbers.split(" | ");

  const winning = winningString.match(numberRegex);
  const mine = myString.match(numberRegex);

  let points = 0;
  if (winning && mine) {
    mine.forEach((num) => {
      if (winning.indexOf(num) > -1) {
        points = points === 0 ? 1 : points * 2;
      }
    });
  }

  sum += points;
}

console.log(sum);
