// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Can you describe your project?",
        name: "description"
    },
    {
        type: "input",
        message: "How can users install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How can we use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "How can we test your project?",
        name: "tests"
    },
    {
        type: "input",
        message: "What are your contributions?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Name of developer(s)?:",
        name: "name"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "githubUsername"
    },
    {
        type: "list",
        message: "Please select your license",
        choices: ["Unlicense", "MIT", "Apache", "None"],
        name: "license"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Creating README.");
    fs.writeFileSync(fileName, data);
    console.log("README Created.");
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
    const markdownText = generateMarkdown(answers);
    writeToFile("README.md", markdownText);
    });
}

// Function call to initialize app
init();
