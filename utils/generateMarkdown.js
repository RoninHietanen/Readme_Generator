// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.webname}

  ## Description
  md
  ${data.discription}


  ## User Story 

  md
  As A ${data.asA} 
  I WANT ${data.iWant}
  SO THAT I ${data.soThatI}


  ## Acceptance Criteria 

  md
  ${data.acceptance}


  ## Mock up

  The following ${data.whatis} shows the web application's appearance and functionality:

  ![${data.webname}](./assests/images/${data.giforpic})

  You can view the deployed webpage at this link. [${data.webname}](${data.livelink}).

  ## Key Technologies Used

  **${data.first}**

  ${data.firstdiscription}

  **${data.second}**

  ${data.seconddiscription}

  **${data.third}**

  ${data.thirddiscription}`;

  //{
  //    type: 'input',
  //    message: 'Please enter .',
  //    name: ' '
  //},
}

module.exports = generateMarkdown;
