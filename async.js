//common async funtions are set-time out,fs.readFile, fetch and stuff
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("hi there");

// err contains the error if some error occurs during the file reading
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log(data);
});

console.log("hi there");
