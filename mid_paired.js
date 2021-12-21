const { writeToFile } = require("./utils");

const midPairedBoards = getMidPairedBoards();

const fileName = "dist/mid_paired.txt";
writeToFile(fileName, midPairedBoards.join("\n"));

function getMidPairedBoards() {
  const combos = [];
  const cards = getCards();
  const cardsForPaired = getCardsForPaired();

  for (const card of cardsForPaired) {
    const remainingCards = cards.filter(c => c !== card);
    remainingCards.forEach(card1 => {
      combos.push(`${card}d${card}s${card1}d`);
    });
  }

  return combos;
}

function getCards() {
  return ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
}

function getCardsForPaired() {
  return ["T", "9", "8"];
}
