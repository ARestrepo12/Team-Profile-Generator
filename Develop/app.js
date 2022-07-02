const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

let Team = []

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require('./lib/htmlRenderer');
const Choice = require('inquirer/lib/objects/choice');



const teamMembers = {
    Manager: [{
        type: "input",
        name: "managerName",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is your manager's ID number?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?"
    }
],

    Engineer: [{
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "Github"
    }
],

    Intern: [{
        type: "input",
        message: "What is the intern's name?",
        name: "employeeName"
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "employeeId"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "school"
    }
]
}

const addNew = {
    type: 'List',
    message: 'Do you wnat to add another employee?',
    name: 'addMember',
    choices: ['Yes', 'No'],
}



function createTeam() {
    inquirer.prompt([{
        type: 'list',
        message: 'Choose the employees role:',
        name: 'employeeChoice',
        choices: ['Manager', 'Engineer', 'Intern',]
    }]).then((answer) => {
        if (answer.employeeChoice === 'Manager') {
            inquirer.prompt(teamMembers.Manager)
        }
        if (answer.employeeChoice === 'Engineer') {
            inquirer.prompt(teamMembers.Engineer)
        }
        if (answer.employeeChoice === 'Intern') {
            inquirer.prompt(teamMembers.Intern)
        }
    })
}

createTeam();