function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.Title} </h1>

## Description
🔍 ${answers.Description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributions
 ${answers.contribution}

:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />

_This README file was created with README Generator by [https://github.com/Kdenn1/Module9)_
  `;
}

module.exports = generateMarkdown;
