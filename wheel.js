const { writeToFile, filterIsNotDuplicatedValue } = require("./utils");

const wheelBoards = getWheelBoards();

const fileName = "dist/wheel.txt";
writeToFile(fileName, wheelBoards.join("\n"));

function getWheelBoards() {
  const combos = [];
  const cards = getCards();

  cards.forEach((card, index) => {
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
  });
  return combos;
}

function getCards() {
  return ["A", "5", "4", "3", "2"];
}
