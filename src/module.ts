const path = require("path");
const { app } = require("electron");

function run(param: number): [] {
  console.log(`execute runner ${param} in main process`);
  return [];
}

module.exports = {
  run,
};
