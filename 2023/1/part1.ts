import fs from 'node:fs';

const input = fs.readFileSync(__dirname + '/input', 'utf-8');

const lines = input.split('\n');

let sum = 0;

for (let i = 0; i < lines.length; i += 1) {
  let line = lines[i];
  let leftNum;
  let rightNum;
  for (let j = 0; j < line.length; j += 1) {
    if (/^\d+$/.test(line[j])) {
      leftNum = line[j];
      break;
    }
  }
  for (let j = line.length - 1; j > -1; j -= 1) {
    if (/^\d+$/.test(line[j])) {
      rightNum = line[j];
      break;
    }
  }
  if (leftNum !== undefined && rightNum !== undefined) {
    sum += Number(leftNum + rightNum);
  }
}

console.log(sum);
