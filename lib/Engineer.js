const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, role, GitHub) {
    super(name, id, email, role);
    this.GitHub = GitHub;
  }

  getGitHub() {
    return this.GitHub;
  }

  getRole() {
    return "Engineer";
  } // Returns 'Employee'
}

module.exports = Engineer;
