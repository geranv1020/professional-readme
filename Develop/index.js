// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a description for your project.'
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'input a table of contents to make it easy for users to find what they need.'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'License',
            message: 'Input the license for your project.'
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Input your guidelines for how other developers can contribute your work.'
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Provide examples for how to run tests for your project.'
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Enter your contact info in case another developer has questions about your project.'
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