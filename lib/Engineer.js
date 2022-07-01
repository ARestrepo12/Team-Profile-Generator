const { Employee } = require('./Employee')

function Engineer(name, email) {
    this.employeeInfo = new Employee(name, email, "engineer");
}

console.log(new Engineer());

module.exports = {
    Engineer
}