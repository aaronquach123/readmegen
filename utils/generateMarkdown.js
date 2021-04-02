
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data) 
  return `
  # ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## Description 
  ${data.description}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  My github: ${data.username}
  My email: ${data.email}
`; 
}

module.exports = generateMarkdown;
