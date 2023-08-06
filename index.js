// TODO:Include packages needed for this
// application;
const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
//TODO:Create an array of questions for user
// input;
const questions = [
  { title: 'What is the Title of your project?' },
  {
    description: 'Provide a description of the project?',
  },
  {
    motivation: 'Provide a descripion of your motivation?',
  },
  {
    solve: 'What does the project solve?',
  },
  {
    installation:
      'What tools may need to be installed before use of the project?',
  },
  {
    usage: 'How will the user use this application?',
  },
  {
    contribuation: 'Who are the users that contributed to the project?',
  },
  {
    lisence: 'What liscence is the project covered under?',
  },
  {
    githubUser: 'Enter your github username.',
  },
  {
    email: 'Enter your email address.',
  },
];

const {
  title,
  description,
  motivation,
  solve,
  installation,
  usage,
  contribuation,
  lisence,
  githubUser,
  email,
} = questions;

//TODO:Create a function to write README file
function writeToFile(fileName, data) {}

let init = () => {
  const inputs = inquirer
    .prompt([
      {
        type: 'input', // Specify the type of input (text)
        name: 'titleAns', // Assign a name to the user's input
        message: 'What is the Title of your application?',
      },
      {
        type: 'input', // Specify the type of input (text)
        name: 'descriptionAns', // Assign a name to the user's input
        message: 'Provide a description of the application?',
      },
      {
        type: 'input',
        name: 'installationAns',
        message:
          'Are there any installation instructions if you, please provide them.',
      },
      {
        type: 'input',
        name: 'usageInfoAns',
        message: 'How would a user use your application',
      },
      {
        type: 'input',
        name: 'contributionAns',
        message: 'Who were the contributers of this application',
      },
      {
        type: 'input',
        name: 'testInstAns',
        message: 'Provide the test instruction',
      },
      {
        type: 'list',
        message: 'What license is your application covered under',
        name: 'licenseAns',
        choices: ['MIT', 'ISC', 'Academic Free License v3.0', 'The Unilecense'],
      },
    ])
    .then((data) => {
      const { titleAns, descriptionAns, motivationAns, solveAns } = data;
      const tableOfContents = `## Table of Contents\n\n -[Project Title](#${title})`;
      const formattedAns = ` # ${titleAns}\n\n## Description:\n\n${descriptionAns}\n\n## Installation:\n\n${installationAns}\n\n## Usage:\n\n ${contribuationAns}\n\n## Contrabution:\n\n `;

      const fileName = `README.md`;
      fs.writeFile(fileName, formattedAns + '\n', (err) =>
        err ? console.log(err) : console.log(titleAns)
      );
    })
    .catch((error) => {
      console.error(error);
    });
};
//Function call to initialize app
init();
