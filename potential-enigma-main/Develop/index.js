// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
//this one was in the module I'm pretty sure it's required 
const inquirer = require("inquirer");
//links to the external generateMarkdown js file 
const generateReadme = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function questionPrompt(){
    return inquirer.question([
        {
            type: "input",
            name: "Title of Project",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "Description of Project",
            message: "Give a description of your project"
        },
        {
            type: "input",
            name: "How to install the project",
            message: "What is the installation process for the user: "
        },
        {
            type: "input",
            name: "Usage of project",
            message: "Describe what the project is used for/purpose"
        },
        {
            type: "input",
            name: "Contribution to the Project",
            message: "Who contributed to the project?"
        },
        {
            type: "input",
            name: "Project testing",
            message: "Is there a test? If so how does user use it?"
        },
        {
            type: "list",
            name: "Licensing",
            message: "Choose a license option from the list below",
            choices: [
                "Mozilla",
                "Open",
                "ISC",
                "Academic",
                "GNU"
            ]
        },
        {
            type: "input",
            name: "Github username",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "user email",
            message: "What is your email?"
        },

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        
    }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
