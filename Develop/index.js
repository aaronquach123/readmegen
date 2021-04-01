// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide a project title!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please enter project description"
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe the installation process.(Optional)"
        },
        {

        }

    ]) 
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("test")
}

// Function call to initialize app
init();
