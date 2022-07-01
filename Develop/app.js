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

function createManager() {
    return inquirer.prompt([{
        type: "input",
        name: "ManagerName",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "managerIDnumber",
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
])
}

function createEmployee()

function createEngineer()

function createIntern()

console.log("Enter the managers info")
createManager();


console.log("hello")

