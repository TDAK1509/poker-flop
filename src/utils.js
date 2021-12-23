function writeToFile(fileName, content) {
  const fs = require("fs");

  fs.writeFile(fileName, content, function (err) {
    if (err) return console.error(err);
    console.log(`Finish writing to file ${fileName}`);
  });
}

function filterIsNotDuplicatedValue(remainingCard, selectedCard) {
  return remainingCard.charAt(0) !== selectedCard.charAt(0);
}

module.exports = {
  writeToFile,
  filterIsNotDuplicatedValue,
};
