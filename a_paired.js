const { writeToFile, filterIsNotDuplicatedValue } = require("./utils");

const aPairedBoards = getAPairedBoards();

const fileName = "dist/a_paired.txt";
writeToFile(fileName, aPairedBoards.join("\n"));

function getAPairedBoards() {
  const combos = [];
  const cards = getCards();

  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    if (card === "K") break;

    const remainingCards1 = [...cards]
      .splice(index + 1)
      .filter(c => filterIsNotDuplicatedValue(c, card));

    remainingCards1.forEach(card1 => {
      combos.push(`${card}d${card}s${card1}d`);
    });
  }
  return combos;
}

function getCards() {
  return ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
}
