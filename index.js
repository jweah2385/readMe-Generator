const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

let init = () => {
  const tableOfContentsObj = {
    title: 'project-Title',
    description: 'description',
    installation: 'installation',
    usage: 'usage',
    contributions: 'contributions',
    testInstructions: 'test-instructions',
    license: 'license',
    contact: 'contact',
    gitHubUser: 'git-hub-user',
    questions: 'questions',
  };

  const inputs = inquirer
    .prompt([
      {
        type: 'input',
        name: 'titleAns',
        message: 'What is the Title of your application?',
      },
      {
        type: 'input',
        name: 'descriptionAns',
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
      {
        type: 'input',
        message: 'What is your gitHub userName',
        name: 'gitHubUserAns',
      },
      {
        typ: 'input',
        message: 'What is your email',
        name: 'contactAns',
      },
    ])
    .then((data) => {
      const {
        title,
        description,
        installation,
        usage,
        contributions,
        testInstructions,
        license,
        questions,
      } = tableOfContentsObj;
      const {
        titleAns,
        descriptionAns,
        installationAns,
        testInstAns,
        contributionAns,
        licenseAns,
        usageInfoAns,
        gitHubUserAns,
        contactAns,
      } = data;

      //This function recieves a list of instructions and formats them
      //into rows
      function formatString(instructions) {
        const newParts = [];
        const parts = instructions.split('/');
        for (element of parts) {
          newParts.push(`${element.trim()}/`);
        }

        const intString = newParts.toString();
        const removeComme = intString.replace(/,/g, '');
        const splicing = removeComme.split('/');

        const formatContributions = splicing.join('\n');
        return formatContributions;
      }

      //This function recieves the github names and return a
      //formated string of github links
      function gitHubFormat(githubName) {
        const parts = githubName.split('/');
        const newParts = [];
        for (element of parts) {
          newParts.push(
            `- [@${element.trim()}](https://github.com/${element.trim()})`
          );
        }
        return newParts.join('\n');
      }

      const allContributes = formatString(contributionAns);
      const usageInstrustions = formatString(usageInfoAns);
      const installInstructions = formatString(installationAns);
      const finalTestInstructions = formatString(testInstAns);
      const gitFormat = gitHubFormat(gitHubUserAns);
      const licenseString = `This project is licensed under the ${licenseAns} License. \nYou can find more details in the [LICENSE](LICENSE) file.`;

      //Formating to send the data as a readme
      const tableOfContents = `Table of Contents\n\n -[Project Title](#${title}) \n -[Lisence](#${license}) \n -[Description](#${description}) \n -[Installation](#${installation}) \n -[Usage](#${usage}) \n -[Contributions](#${contributions}) \n -[Test Instructions](#${testInstructions}) \n -[Questions](#${questions}) `;
      const formattedAns = `# ${titleAns}\n\n## License\n\n${licenseString}\n\n## Description\n\n${descriptionAns} \n\n## ${tableOfContents}\n\n## Installation\n\n${installInstructions}\n\n## Usage\n\n${usageInstrustions}\n\n## Contributions\n\n${allContributes}\n\n## Test Instructions\n\n${finalTestInstructions}\n\n## Questions\n\n${contactAns}\n\n${gitFormat}`;
      const fileName = `README.md`;

      fs.writeFile(fileName, formattedAns + '\n', (err) =>
        err ? console.log(err) : console.log()
      );
    })
    .catch((error) => {
      console.error(error);
    });
};

init();
