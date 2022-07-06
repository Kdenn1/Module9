// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
//this one was in the module I'm pretty sure it's required 
const inquirer = require("inquirer");
//links to the external generateMarkdown js file 
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "Description",
            message: "Give a description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "What is the installation process for the user: "
        },
        {
            type: "input",
            name: "usage",
            message: "Describe what the project is used for/purpose"
        },
        {
            type: "input",
            name: "contribution",
            message: "Who contributed to the project?"
        },
        {
            type: "list",
            name: "license",
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
            name: "username",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },

    ])
}

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        // Write a user generated readme to the dist folder 
        await writeFileAsync('./dist/README.md', generateContent);
        //console log the message to know it worked 
        console.log('Successfully generated new README.md file');
        //throw an error message if it doesn't work 
    }   catch(err) {
        console.log(err);
    }
  }
  //call the init function  
  init();

