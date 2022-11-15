const inquirer = require("inquirer");
// const path = require("./src/template.js");
const buildHTML = require("./src/template");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

async function getAsk() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is employee name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is employee email?",
    },
    {
      type: "input",
      name: "role",
      message: "What is employee role/position?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
  if (answers.role === "Manager") {
    const officeNumber = await inquirer.prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ]);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.role,
      officeNumber.officeNumber
    );
    team.push(newManager);
    // console.log(team);
  } else if (answers.role === "Engineer") {
    //Engineer additional questions
    // github // GitHub username
    const gitHub = await inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "What is your github?",
      },
    ]);
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.role,
      gitHub.gitHub
    );
    team.push(newEngineer);
  } else if (answers.role === "Intern") {
    //intern additional questions
    // school
    const school = await inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "What school did intern go too?",
      },
    ]);
    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.role,
      school.school
    );
    team.push(newIntern);
  }
}

//initial employee questions
const promptQuestions = async () => {
  await getAsk();
  const addTeam = await inquirer.prompt([
    {
      name: "addTeam",
      type: "list",
      choices: ["Add team", "Show team"],
      message: "What would you like to do?",
    },
  ]);
  if (addTeam.addTeam === "Add team") {
    promptQuestions();
  } else {
    console.log(team);
    // return buildTeam(team);
  }
};

//create a function to build team in the HTML file
// function buildTeam(team) {
// console.log(team);
// fs.writeFile("./dist/index.html", buildHTML(team), (err) => {
//   console.log(team);
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("HTML file made for the team");
//   }
// });
// }

// async function promptQuestions() {
//   await questions();
//   // console.log(team);
//   const addTeam = await inquirer.prompt([
//     {
//       name: "addTeam",
//       type: "list",
//       choices: ["Add team", "Show team"],
//       message: "What would you like to do?",
//     },
//   ]);
//   if (addTeam.addTeam === "Add team") {
//     return promptQuestions();
//   } else {
//     return buildTeam(team);
//   }
// }

promptQuestions();

// // TODO: Create a function to initialize app
// function init() {
//   promptquestions(questions).then(function () {
//     buildTeam(team);
//   });
// }

// //function call to initialize app
// init();

// // inquirer.prompt([
// //     {
// //       type: "input",
// //       name: "test",
// //       message: "Input a message here: "
// //     }
// // ]).then(ans => {
// //     console.log(ans)
// // })

// // Once you have something like that and you know it works. Then you can extrapolate the question and pass it as a variable. Like this
// // const questions = [
// //     {
// //       type: "input",
// //       name: "test",
// //       message: "Input a message here: "
// //     }
// // ]

// // inquirer.prompt(questions).then(ans => {
// //     console.log(ans)
// // })
