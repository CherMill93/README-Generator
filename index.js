// Question #1 - correcting error in terminal
//Question #2 - is this structured right?
// Q#3 - How to work the licenses


// TODO: Include packages needed for this application
  //node modules
  const inquirer = require('inquirer');
  const fs = require('fs');


// TODO: Create an array of questions for user input
  //inquirer to generate questions
  inquirer.prompt(
    [
      {
        type: 'input',
        message: 'What is the title of your project?',
        name:'title',
        validate: (value)=>{ 
          if(value){return true} 
          else {return 'I need a title to continue'}},
      },
      {
        type: 'input',
        message: 'How do you install your app?',
        name: 'installation',
        validate: (value)=>{ 
          if(value){return true} 
          else {return 'I need a value to continue'}},
      },
      {
        type: 'input',
        message: 'Instructions to be followed?',
        name: 'instructions',
        validate: (value)=>{ 
          if(value){return true} 
          else {return 'I need instructions to continue'}},
      },
      {
        type: 'input',
        message: 'Any credits you would like to add?',
        name: 'credits',
        validate: (value)=>{ 
          if(value){return true} 
          else {return 'I need a value to continue, use No if not applicable'}},
      },
      {
        type: 'input',
        message: 'How do you use your app?',
        name: 'usage',
        validate: (value)=>{ 
          if(value){return true} 
          else {return 'I need a value to continue'}},
      },
      { //list of license
        type: 'list',
        message: 'What licenses did you use?',
        name: 'license',
        choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A'],
        validate: (value)=>{ 
          if(value){return true} 
          else {return 'I need a license to continue'}},
      },
      {
        type: 'input',
        message:'Github username:',
        name: 'git',
        validate: (value)=>{ 
          if(value){return true} 
          else {return 'I need a username to continue'}},
      },
      {
        type: 'input',
        message: 'E-mail:',
        name: 'email',
        validate: (value)=>{ 
          if(value){return true} 
          else {return 'I need a username to continue'}},
      },   
    ]
  ).then(({
    title,
    installation,
    instructions,
    credits,
    usage,
    license,
    git,
    email,
  })=>{
   //template to be used 
   const template = `# ${title}
   # Installation
   ${installation}

   # Instructions
   ${instructions}

   # Credits
   ${credits}

   # Usage
   ${usage}

   # License
   ${license}
   ![Github License](https://img.shields.io/badge/license-${license}-blue.svg)

   # GitHub
   ${git}
   ![Developer's Profile](https://github.com/${git})


   # Email
   ![For any questions, concerns, or feedback please reach out here:]${email}
   `;

   // TODO: Create a function to write README file
    createNewFile("ReadMe", template);
  }
  );




// TODO: Create a function to initialize app
  function createNewFile(fileName, data){
    //fs
    fs.writeFile(`./ ${fileName.toLowerCase().split(' ').join(' ')}.md`,data, (err) => {
      if(err){
        console.log(err)
      }
      console.log('Your README has been generated');
    })
  }
