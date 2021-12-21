const { writeToFile } = require("./utils");

const lowPairedBoards = getLowPairedBoards();

const fileName = "dist/low_paired.txt";
writeToFile(fileName, lowPairedBoards.join("\n"));

function getLowPairedBoards() {
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
  return ["7", "6", "5", "4", "3", "2"];
}
