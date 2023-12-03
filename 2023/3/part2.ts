import fs from "node:fs";

const input = fs.readFileSync(__dirname + "/input", "utf-8");

const lines = input.split("\n");

let sum = 0;

const isDigit = (s: string) => !isNaN(parseInt(s));

for (let y = 0; y < lines.length; y += 1) {
  for (let x = 0; x < lines[y].length; x += 1) {
    if (!lines[y][x].match(/\.|\d/)) {
      const partNums: number[] = [];
      for (
        let partSearchY = y > 0 ? y - 1 : y;
        partSearchY <= (y === lines.length - 1 ? y : y + 1);
        partSearchY += 1
      ) {
        let thisColVisited = false;
        let nextColVisited = false;

        const crawlPartNumForwards = (partSearchX) => {
          let partNumString = "";
          for (let i = partSearchX; i < lines[partSearchY].length; i += 1) {
            if (isDigit(lines[partSearchY][i])) {
              if (i === x) {
                thisColVisited = true;
              }
              if (i === x + 1) {
                nextColVisited = true;
              }
              partNumString = partNumString + lines[partSearchY][i];
            } else break;
          }
          return partNumString;
        };

        if (x > 0) {
          if (isDigit(lines[partSearchY][x - 1])) {
            let partNumString = "";
            for (let i = x - 1; i > -1; i -= 1) {
              if (isDigit(lines[partSearchY][i])) {
                partNumString = lines[partSearchY][i] + partNumString;
              } else break;
            }
            partNumString += crawlPartNumForwards(x);
            partNums.push(Number(partNumString));
          }
        }
        if (!thisColVisited && isDigit(lines[partSearchY][x])) {
          const partNumString = crawlPartNumForwards(x);
          partNums.push(Number(partNumString));
        }
        if (
          !nextColVisited &&
          x < lines[partSearchY].length - 1 &&
          isDigit(lines[partSearchY][x + 1])
        ) {
          const partNumString = crawlPartNumForwards(x + 1);
          partNums.push(Number(partNumString));
        }
      }
      if (partNums.length === 2) {
        sum += partNums.reduce((a, b) => a * b, 1);
      }
    }
  }
}

console.log(sum);
