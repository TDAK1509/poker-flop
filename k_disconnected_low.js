const { writeToFile } = require("./utils");

const kDisconnectedLowBoards = getKDisconnectedLowBoards();

const fileName = "dist/k_disconnected_low.txt";
writeToFile(fileName, kDisconnectedLowBoards.join("\n"));

function getKDisconnectedLowBoards() {
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
  return ["8", "7", "6", "5", "4", "3"];
}

function getThirdCards() {
  return ["7", "6", "5", "4", "3", "2"];
}
