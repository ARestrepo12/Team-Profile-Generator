const { Employee } = require('./Employee')

function Intern(name, email) {
    this.employeeInfo = new Employee(name, email, "intern");
}

module.exports = {
    Intern
}