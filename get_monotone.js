const { writeToFile } = require("./write_to_file");

const monotoneBoards = getMonotoneBoards();

const fileName = "monotone.txt";
writeToFile(fileName, monotoneBoards.join("\n"));

function getMonotoneBoards() {
  const cards = getCards();
  let combos = [];

  cards.forEach((card, index) => {
    const remainingCards1 = [...cards].splice(index + 1);

    remainingCards1.forEach((card2, index2) => {
      const remainingCards2 = [...remainingCards1].splice(index2 + 1);

      remainingCards2.forEach(card3 => {
        const spades = `${card}s${card2}s${card3}s`;
        const clubs = `${card}c${card2}c${card3}c`;
        const diamonds = `${card}d${card2}d${card3}d`;
        const hearts = `${card}h${card2}h${card3}h`;
        combos.push(spades);
        combos.push(clubs);
        combos.push(diamonds);
        combos.push(hearts);
      });
    });
  });
  return combos;
}

function getCards() {
  return ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
}
