const inquirer = require("inquire");
const path = require("path");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//initial employee questions
const questions = () => {
    answer.inquirer.prompt([
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
    ])
};

//Manager additional questions
// officeNumber
// getRole() // Overridden to return 'Manager'

//Engineer additional questions
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

//intern additional questions
// school
// getSchool()
// getRole() // Overridden to return 'Intern'
