const inquirer = require('inquirer');

const fs = require('fs');

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
    {
        type: 'input',
        message: 'If this project falls under any licenses please enter them below -- if there is none please state so.',
        name: 'licence'
    },
    {
        type: 'input',
        message: 'If this project falls under any licenses please enter the links for them below -- if there is none please leave it empty.',
        name: 'licencelink'
    },
  ])
  .then((answers) => {
    const mdPageContent = generateMarkdown(answers);

    fs.writeFile('README.md', mdPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

const generateMarkdown = (answers) =>
`# ${answers.webname}
  
## Description
${answers.discription}


## User Story 

As A ${answers.asA} 
I WANT ${answers.iWant}
SO THAT I ${answers.soThatI}


## Acceptance Criteria 

${answers.acceptance}


## Mock up

The following ${answers.whatis} shows the web application's appearance and functionality:

![${answers.webname}](./assests/images/${answers.giforpic})

You can view the deployed webpage at this link. [${answers.webname}](${answers.livelink}).

## Key Technologies Used

**${answers.first}**

${answers.firstdiscription}

**${answers.second}**

${answers.seconddiscription}

**${answers.third}**

${answers.thirddiscription}

## Licences

**${answers.licence}**
**${answers.licencelink}**`;
/* {
    type: 'input',
    message: 'Please enter .',
    name: ' '
}, */