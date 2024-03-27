#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "text",
        type: "input",
        message: "Enter Your Text To Find The Word Count:"
    },
]);
let allWords = answer.text.trim().split(" ");
console.log(`The total words in this text are: ${allWords.length}.`);
