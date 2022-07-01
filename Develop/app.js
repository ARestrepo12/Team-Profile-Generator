const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Team = []
const OUTPUT_DIR = path.resolver(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require('./lib/htmlRenderer');

function createTeam() {
    return inquirer.prompt([{
        type: "list",
        name: "choose employee role:",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "I don't want to add another employee."
        ]
    }])
}

function createManager() {
    return inquirer.prompt([{
        type: "input",
        name: "ManagerName",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "ManagerIDnumber",
        message: "What is your manager's ID number?"
    },
    {
        type: "input",
        name: "ManagerEmail",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "ManagerOfficeNumber",
        message: "What is your manager's office number?"
    },
]).then(answers => {
    const manager = new Manager(answers.ManagerName, answers.managerIDNumber, answers.ManagerEmail, answers.ManagerOfficeNumber)
    Team.push(manager)
    createTeam();
})
}

function createEmployee() {}

function createEngineer() {}

function createIntern() {}

console.log("Enter the managers info")
createManager();


console.log("hello")

