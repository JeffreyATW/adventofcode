import fs from 'node:fs';

const input = fs.readFileSync(__dirname + '/input', 'utf-8');

const lines = input.split('\n');

let sum = 0;

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const getNumeralFromNumber = (num: string) => {
  let numeral = numbers.indexOf(num);
  if (numeral === -1) {
    return num;
  }
  return String(numeral);
}

for (let i = 0; i < lines.length; i += 1) {
  let line = lines[i];

  const groups: string[] = [];
  for (const match of line.matchAll(new RegExp(`(?=(\\d|${numbers.join('|')}))`, 'g'))) {
    groups.push(match[1]);
  }

  if (groups) {
    const leftNum = groups[0];
    const rightNum = groups[groups.length - 1];

    if (leftNum !== undefined && rightNum !== undefined) {
      sum += Number(getNumeralFromNumber(leftNum) + getNumeralFromNumber(rightNum));
    }
  }
}

console.log(sum);
