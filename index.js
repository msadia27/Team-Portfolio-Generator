const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

//initial employee questions
const questions = [
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
];

const promptquestions = (questions) => {
  //questions().then(answers => console.log('answers', answers))
  //console.log('answers', answers)
  //inquirer.prompt

  return inquirer.prompt(questions).then((answers) => {
    //console.log("answers", answers);

    if (answers.role === "Manager") {
      // officeNumber
      //const
      return inquirer
        .prompt([
          {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
          },
        ])
        .then((data) => {
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.role,
            data.officeNumber
          );
          team.push(newManager);
        });
    } else if (answers.role === "Engineer") {
      //Engineer additional questions
      // github // GitHub username
      return inquirer
        .prompt([
          {
            type: "input",
            name: "github",
            message: "What is your github?",
          },
        ])
        .then((data) => {
          const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.role,
            data.github
          );
          team.push(newEngineer);
        });
    } else if (answers.role === "Intern") {
      //intern additional questions
      // school
      return inquirer
        .prompt([
          {
            type: "input",
            name: "school",
            message: "What school did intern go too?",
          },
        ])
        .then((data) => {
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.role,
            data.school
          );
          team.push(newIntern);
        });
    }
  });
};

//create a function to build team in the HTML file
// function buildTeam(team) {
//   {
//     fs.writeFile("./dist/index.html", `${team}`, function (err) {
//       console.log(team);
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("HTML file made for the team");
//       }
//     });
//   }
// }

//render ( employees)
function buildTeam(team) {
  // Create the output directory if the output path doesn’t exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(team), "utf-8");
}

// TODO: Create a function to initialize app
function init() {
  promptquestions(questions).then(function () {
    buildTeam(team);
  });
}

//function call to initialize app
init();

// inquirer.prompt([
//     {
//       type: "input",
//       name: "test",
//       message: "Input a message here: "
//     }
// ]).then(ans => {
//     console.log(ans)
// })

// Once you have something like that and you know it works. Then you can extrapolate the question and pass it as a variable. Like this
// const questions = [
//     {
//       type: "input",
//       name: "test",
//       message: "Input a message here: "
//     }
// ]

// inquirer.prompt(questions).then(ans => {
//     console.log(ans)
// })
