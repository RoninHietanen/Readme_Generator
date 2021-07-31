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

  ${data.thirddiscription}
  
  #Llicences
  
  **${licence}**`;
}

module.exports = generateMarkdown;