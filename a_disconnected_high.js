const { writeToFile } = require("./utils");

const aDisconnectedHighBoards = getADisconnectedHighBoards();

const fileName = "dist/a_disconnected_high.txt";
writeToFile(fileName, aDisconnectedHighBoards.join("\n"));

function getADisconnectedHighBoards() {
  const combos = [];
  const card = "A";
  const cards = getCards();
  const thirdCards = getThirdCards();

  for (let index = 0; index < cards.length; index++) {
    const card1 = cards[index];
    if (card1 === "9") break;

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
  return ["K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
}

function getThirdCards() {
  return ["9", "8", "7", "6", "5", "4", "3", "2"];
}
