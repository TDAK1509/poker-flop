const { writeToFile } = require("./utils");

const monotoneBoards = getMonotoneBoards();

const fileName = "dist/monotone.txt";
writeToFile(fileName, monotoneBoards.join("\n"));

function getMonotoneBoards() {
  const cards = getCards();
  let combos = [];

  cards.forEach((card, index) => {
    const remainingCards1 = [...cards].splice(index + 1);

    remainingCards1.forEach((card2, index2) => {
      const remainingCards2 = [...remainingCards1].splice(index2 + 1);

      remainingCards2.forEach(card3 => {
        combos.push(`${card}${card2}${card3}sss`);
      });
    });
  });
  return combos;
}

function getCards() {
  return ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
}
