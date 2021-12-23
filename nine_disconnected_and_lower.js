const { writeToFile } = require("./utils");

const nineDisconnectedAndLowerBoards = getNineDisconnectedAndLowerBoards();

const fileName = "dist/9_disconnected_and_lower.txt";
writeToFile(fileName, nineDisconnectedAndLowerBoards.join("\n"));

function getNineDisconnectedAndLowerBoards() {
  const combos = [];
  const firstCards = getFirstCards();
  const secondCards = getSecondCards();
  const thirdCards = getThirdCards();

  for (let i = 0; i < firstCards.length; i++) {
    const card = firstCards[i];

    if (i > 0) {
      secondCards.shift();
      thirdCards.shift();
    }

    for (const card1 of secondCards) {
      if (card === card1) continue;

      for (const card2 of thirdCards) {
        if (card2 !== card1) {
          combos.push(`${card}h${card1}d${card2}c`);
          combos.push(`${card}d${card1}d${card2}s`);
          combos.push(`${card}d${card1}s${card2}d`);
          combos.push(`${card}s${card1}d${card2}d`);
        }
      }
    }
  }
  return combos;
}

function getFirstCards() {
  return ["9", "8", "7"];
}

function getSecondCards() {
  return ["8", "7", "6", "5", "4", "3"];
}

function getThirdCards() {
  return ["4", "3", "2"];
}
