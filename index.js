// Readline-sync node
let readlineSync = require("readline-sync");

const getChoice = (num) => {
  return Math.floor(Math.random() * Math.floor(num)).toString();
};

// welcome
const welcome = () => {
  console.log(" ");
  console.log("Welcome to Adventure Land!");
  console.log(" ");
  console.log(
    `Hello ${getName()}, You are entering this crazy mischievous land. Have fun!!`
  );
  console.log(
    "******************************************************************"
  );
};

// name
const getName = () => {
  let name = readlineSync.question("Enter name: ");
  console.log(" ");
  return name;
};

// start or exit
const startOrExit = () => {
  console.log(" ");
  let option1 = readlineSync.question("Press 1 to start or Press 2 to exit: ");
  switch (option1) {
    case "1":
      start();
      break;
    case "2":
      console.log("Goodbye");
      exit();
      break;
    default:
      console.log("Right choose");
  }
};

// start
const start = () => {
  levelOne();
};

// exit
const exit = () => {
  return process.exit(1);
};

// levels
const levelOne = () => {
  console.log(" ");
  console.log(
    "You have entered Nike home but you need to leave before he eats you!!!!"
  );
  console.log(" ");
  console.log("Make your choice 1 or 2 : ");
  let option = readlineSync.question();
  let choice = getChoice(2);

  if (option === choice) {
    console.log("Nike eats you");
    console.log(" ");
    exit();
  } else {
    console.log("Well done!");
    console.log(" ");
    console.log("You advance to level 2!");
    console.log("*************************");
    levelTwo();
  }
};

const levelTwo = () => {
  console.log(" ");
  console.log(
    "You are surrounded by the Nerium Oleander know as the Sweetly Scented Killer!!"
  );
  console.log(" ");
  console.log(
    "You are enchanted to touch the Nerium Oleander but if you touch you will die!"
  );
  console.log("Do you give in to the temptation?");
  console.log(" ");
  let option = readlineSync.question("Make your choice  between 1 and 3: ");
  let choice = getChoice(3);
  // console.log("Game choice: ", choice);

  if (option === choice) {
    console.log("Well done!");
    console.log("You advence to level 3!");
    console.log("*************************");
    console.log("*************************");
    console.log(" ");
    levelThree();
  } else {
    console.log("You give into the temptation!");
    console.log(" ");
    console.log("You die! Goodbye");
    exit();
  }
};

const levelThree = () => {
  console.log(" ");
  let option = readlineSync.question(
    "Pluk! Pluk! Pluk! I am the Talking Chicken, choose a number between 1 and 5, choose wrong and I eat you!: "
  );
  let choice = getChoice(3);
  // console.log("Game choice: ", choice);

  if (option === choice) {
    console.log(" ");
    console.log("=============================");
    console.log("== Congratulations! You won ===");
    console.log("=============================");
  } else {
    console.log("Talking Chicken take your soul!");
    console.log("You die! Goodbye");
    exit();
  }
};

//Main functions

welcome();
startOrExit();
