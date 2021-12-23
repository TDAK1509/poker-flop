const { writeToFile } = require("./utils");

const kDisconnectedHighBoards = getKDisconnectedHighBoards();

const fileName = "dist/k_disconnected_high.txt";
writeToFile(fileName, kDisconnectedHighBoards.join("\n"));

function getKDisconnectedHighBoards() {
  const combos = [];
  const card = "K";
  const cards = getCards();
  const thirdCards = getThirdCards();

  for (let index = 0; index < cards.length; index++) {
    const card1 = cards[index];

    for (const card2 of thirdCards) {
      if (card2 !== card1) {
        combos.push(`${card}h${card1}d${card2}c`);
        combos.push(`${card}d${card1}d${card2}s`);
        combos.push(`${card}d${card1}s${card2}d`);
        combos.push(`${card}s${card1}d${card2}d`);
      }
    }
  }
  return combos;
}

function getCards() {
  return ["Q", "J", "T", "9"];
}

function getThirdCards() {
  return ["8", "7", "6", "5", "4", "3", "2"];
}
