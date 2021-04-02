// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
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
            type: "input",
            name: "usage",
            message: "What is the project usage?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the license for this project:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "How would the user conduct a test?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter a username"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter an email"
        }

    ]) 
}

const writeFile = content => {
     return new Promise((resolve, reject) => {
         fs.writeFile("./dist/readme.md", content, err => {
             if (err) {
                 reject(err)
                 return;
             } 
             resolve({
                 ok: true,
                 message: "File created!"
             })
         })
     })
}

// TODO: Create a function to initialize app
async function init() {
    const data = await questionsPrompt();
    const content = await generateMarkdown(data);
    writeFile(content);

}

// Function call to initialize app
init();
