const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = [];

//initial employee questions
const questions = () => {
    inquirer.prompt([
    {
        //name
    type: "input",
    name: "name",
    message: "What is employee name?",
    },
    {
        //id
    type: "input",
    name: "id",
    message: "What is employee ID?",
    },
    {
        //email
    type: "input",
    name: "email",
    message: "What is employee email?",
    },
    {
        //role/position
    type: "input",
    name: "role",
    message: "What is employee position/role?", 
    choices: [Manager, Engineer, Intern],  
    }
    ]); 
}

function promptQuestions() {
    inquirer.prompt(questions)
    .then((answers) => {
        if (answers.role === Manager) {
            // officeNumber
            const officeNumber = inquirer.prompt ([ 
            {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            }
            ]);
            const addManager = new Manager(answers.name, answers.id, answers.email, officeNumber.officeNumber);
            team.push(
                new Manager(answers.name, answers.id, answers.email, officeNumber.officeNumber)
                );
            } else if (answers.role === Engineer) {
        //Engineer additional questions
        // github // GitHub username
            const github= inquirer.prompt ([ 
            {
            type: "input",
            name: "github",
            message: "What is your github?",
            }
            ]);
            const addEngineer = new Engineer(answers.name, answers.id, answers.email, github.github);
            team.push(new Engineer(answers.name, answers.id, answers.email, github.github));
            } else if (answers.role === Intern) {
        //intern additional questions
        // school
            const school = inquirer.prompt ([ 
            {
            type: "input",
            name: "school",
            message: "What school did intern go too?",
            }
            ]);
            const addIntern = new Intern(answers.name, answers.id, answers.email, school.school);
            team.push(new Intern(answers.name, answers.id, answers.email, school.school));
        };
    })
    buildTeam()
};

promptQuestions();

//create a function to build team in the HTML file
function buildTeam() {
    {
        fs.writeFile("./dist/index.html", team, function(err){
            console.log(team)
            if(err){
                console.log(err)
            } else {
                console.log("HTML file made")
            }
        });
    }
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(team){
        writeToFile("./dist/index.html", buildTeam(team))
        console.log(team)
    })
};

//function call to initialize app
init();
