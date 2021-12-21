function writeToFile(fileName, content) {
  const fs = require("fs");

  fs.writeFile(fileName, content, function (err) {
    if (err) return console.error(err);
    console.log(`Finish writing to file ${fileName}`);
  });
}

module.exports = {
  writeToFile,
};
