// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a description for your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'input a table of contents to make it easy for users to find what they need.',
            validate: contentInput => {
                if (contentInput) {
                    return true;
                } else {
                    console.log('You need to enter the table of contents for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to enter the steps to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions and examples for use.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to enter instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'Select the license you want to use for your project.',
            choices: ['MPL', 'CPL', 'MIT', 'BSD', 'APACHE', 'Ms-RL']   
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Input your guidelines for how other developers can contribute your work.',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You need to enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Provide examples for how to run tests for your project.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('You need to enter test instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Enter your contact info in case another developer has questions about your project.',
            validate: questionInput => {
                if (questionInput) {
                    return true;
                } else {
                    console.log('You need to enter your contact info (e.g. your email)!');
                    return false;
                }
            }
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();