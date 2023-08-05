// TODO:Include packages needed for this
// application;
const inquirer = require('inquirer');
const fs = require('fs');
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
  inquirer
    .prompt([
      {
        type: 'input', // Specify the type of input (text)
        name: 'titleAns', // Assign a name to the user's input
        message: 'What is the Title of your project?',
      },
      {
        type: 'input', // Specify the type of input (text)
        name: 'descriptionAns', // Assign a name to the user's input
        message: 'Provide a description of the project?',
      },
      {
        type: 'input',
        name: 'motivationAns',
        message: 'Describe the description of your motivation.',
      },
      {
        type: 'input',
        name: 'solveAns',
        message: 'What does the project solve?',
      },
    ])
    .then((data) => {
      // Process the user's answers here
      console.log('Hello,'); // Display the user's name
      const fileName = `${inquirer.name}`;
      fs.writeFile(fileName, 'Hello', (err) =>
        err ? console.log(err) : console.log('Success')
      );
    })
    .catch((error) => {
      console.error(error);
    });
};
//Function call to initialize app
init();
