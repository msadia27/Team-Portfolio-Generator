const Employee = require("./lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        super (name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.name;
    }

    getRole() {
        return "Engineer";
    }// Returns 'Employee'     
}

module.exports = Engineer;