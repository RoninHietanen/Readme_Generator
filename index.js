// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Please enter the name of your webpage.',
        name: 'webname',
    },
    {
        type: 'input',
        message: 'Please write a brief discription about your project.',
        name: 'discription',
    },
    {
        type: 'input',
        message: 'Please enter the AS A part of your user story.',
        name: 'asA',
    },
    {
        type: 'input',
        message: 'Please enter the I WANT part of your user story.',
        name: 'iWant',
    },
    {
        type: 'input',
        message: 'Please enter your SO THAT I part of your user story.',
        name: 'soThatI',
    },
    {
        type: 'input',
        message: 'Please enter your acceptance criteria.',
        name: 'acceptance',
    },
    {
        type: 'input',
        message: 'For the mock up portion please enter weather it is an animation or a screenshot of your webpage.',
        name: 'whatis',
    },
    {
        type: 'input',
        message: 'Please enter the pathway in your file for the animation or screenshot. eg -- "./assests/images/Covid19Tracker.gif".',
        name: 'giforpic'
    },
    {
        type: 'input',
        message: 'Please enter the URL for your live webpage.',
        name: 'livelink'
    },
    {
        type: 'input',
        message: 'Please enter the first key technology used.',
        name: 'first'
    },
    {
        type: 'input',
        message: 'Please enter the discription of the first ket technology used.',
        name: 'firstdiscription'
    },
    {
        type: 'input',
        message: 'Please enter the second key technology used.',
        name: 'second'
    },
    {
        type: 'input',
        message: 'Please enter the discription of the second ket technology used.',
        name: 'seconddiscription'
    },
    {
        type: 'input',
        message: 'Please enter the third key technology used.',
        name: 'third'
    },
    {
        type: 'input',
        message: 'Please enter the discription of the third ket technology used.',
        name: 'thirddiscription'
    },
  ])
  .then((data) => {
    const htmlPageContent = generateHTML(data);
    // TODO: Create a function to write README file
    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();







  