"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function simpleArraySum(array) {
  let initial = 0;
  for (let i = 0; i < array.length; i++) {
    initial = initial + array[i];
  }
  return initial;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const arCount = parseInt(readLine().trim(), 10);
  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = simpleArraySum(ar);

  ws.write(result + " \n");
  ws.end();
}
