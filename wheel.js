const { writeToFile } = require("./write_to_file");

const wheelBoards = getWheelBoards();

const fileName = "wheel.txt";
writeToFile(fileName, wheelBoards.join("\n"));

function getWheelBoards() {
  const combos = [];
  const cards = getCardsWithAttribute();

  cards.forEach((card, index) => {
    const remainingCards1 = [...cards]
      .splice(index + 1)
      .filter(c => filterIsNotDuplicatedValue(c, card));

    remainingCards1.forEach((card1, index) => {
      const remainingCards2 = [...remainingCards1]
        .splice(index + 1)
        .filter(c => filterIsNotDuplicatedValue(c, card1));

      remainingCards2.forEach(card2 => {
        if (!isMonotone(card, card1, card2)) {
          combos.push(card + card1 + card2);
        }
      });
    });
  });
  return combos;
}

function getCardsWithAttribute() {
  const cards = getCards();
  return cards.flatMap(card => [
    card + "s",
    card + "c",
    card + "d",
    card + "h",
  ]);
}

function getCards() {
  return ["A", "5", "4", "3", "2"];
}

function filterIsNotDuplicatedValue(remainingCard, selectedCard) {
  return remainingCard.charAt(0) !== selectedCard.charAt(0);
}

function isMonotone(card1, card2, card3) {
  const card1Tone = card1.charAt(1);
  const card2Tone = card2.charAt(1);
  const card3Tone = card3.charAt(1);
  return card1Tone === card2Tone && card1Tone === card3Tone;
}
