const { writeToFile, filterIsNotDuplicatedValue } = require("./utils");

const highConnectedBoards = getHighConnectedBoards();

const fileName = "dist/high_connected.txt";
writeToFile(fileName, highConnectedBoards.join("\n"));

function getHighConnectedBoards() {
  const combos = [];
  const cards = getCards();

  for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    if (card === "T") break;

    const remainingCards1 = [...cards]
      .splice(index + 1)
      .filter(c => filterIsNotDuplicatedValue(c, card));

    remainingCards1.forEach((card1, index) => {
      const remainingCards2 = [...remainingCards1]
        .splice(index + 1)
        .filter(c => filterIsNotDuplicatedValue(c, card1));

      remainingCards2.forEach(card2 => {
        combos.push(`${card}h${card1}d${card2}c`);
        combos.push(`${card}d${card1}d${card2}s`);
        combos.push(`${card}d${card1}s${card2}d`);
        combos.push(`${card}s${card1}d${card2}d`);
      });
    });
  }
  return combos;
}

function getCards() {
  return ["K", "Q", "J", "T", "9", "8", "7"];
}
