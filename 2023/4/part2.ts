import fs from "node:fs";

const numberRegex = /\d+/g;

const input = fs.readFileSync(__dirname + "/input", "utf-8");

const cards = input.split("\n");

const cardInstances: number[] = Array(cards.length + 1).fill(1);
cardInstances[0] = 0;

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  const numbers = card.split(": ")[1];

  const [winningString, myString] = numbers.split(" | ");

  const winning = winningString.match(numberRegex);
  const mine = myString.match(numberRegex);

  let matchedNumbers = 0;
  if (winning && mine) {
    mine.forEach((num) => {
      if (winning.indexOf(num) > -1) {
        matchedNumbers += 1;
      }
    });
  }

  for (let k = i + 2; k < matchedNumbers + i + 2; k += 1) {
    cardInstances[k] += cardInstances[i + 1];
  }
}

console.log(cardInstances.reduce((a, b) => a + b, 0));
