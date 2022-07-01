const { Employee } = require('./Employee')

function Manager(name, email) {
    this.employeeInfo = new Employee(name, email, "manager");
}

module.exports = {
    Manager
}