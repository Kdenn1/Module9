// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("potential-enigma-main");
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
            name: "Installation",
            message: "What is the installation process for the user: "
        },
        {
            type: "input",
            name: "Usage of project",
            message: "Describe what the project is used for/purpose"
        },
        {
            type: "input",
            name: "Contribution",
            message: "Who contributed to the project?"
        },
        {
            type: "input",
            name: "Projecttesting",
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
            name: "Githubusername",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "useremail",
            message: "What is your email?"
        },

    ])
}

// TODO: Create a function to initialize app
async function init() {
    try {
        // ask questions and generate the responses 
        const answers = await promptUser();
        // links to the external generatemarkdown js page 
        const generateContent = generateMarkdown(answers);

        await writeFileAsync('./Develop/dist/README.md', generateContent);
        console.log('README file has been successfully written');
    } catch(err){
        console.log(err);
    }
}

// Function call to initialize app
init();

