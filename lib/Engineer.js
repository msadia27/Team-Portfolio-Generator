const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
  }

  getGitHub() {
    return this.name;
  }

  getRole() {
    return "Engineer";
  } // Returns 'Employee'
}

module.exports = Engineer;
