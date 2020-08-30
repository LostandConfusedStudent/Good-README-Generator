// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![GitHub repo size](https://img.shields.io/github/repo-size/${data.profile}/${data.title})
  
  ${data.description}
  
  ## Installing ${data.title}
  
  To install ${data.title}, follow these steps:
  
  Linux and macOS:
  \`\`\`
  ${data.installation}
  \`\`\`
  
  Windows:
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Using ${data.title}
  
  To use ${data.title}, follow these steps:
  
  \`\`\`
  ${data.usage}
  \`\`\`

  ## Running tests for ${data.title}
  
  To run tests, follow these steps:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Contributing to ${data.title}
  
  ${data.contribution}
   
  ## Contact
  
  If you want to contact me you can reach me at ${data.email}.
  
  ## License
  <!--- If you're not sure which open license to use see https://choosealicense.com/--->
  
  This project uses the following license: ${data.license}.

`;
}

module.exports = generateMarkdown;
