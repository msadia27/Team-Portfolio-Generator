const Manager = require("../lib/Manager");

test('what is your office number', () => {
    const officeNumber = "01";
    const manager = new Manager('Jared', 123, 'test@gmail.com', officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
  });
  
  test('does office number method work', () => {
    const officeNumber = "01";
    const manager = new Manager('Jared', 123, 'test@gmail.com', officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
  });
  
  test('testing role', () => {
      const role = 'Manager';
      const manager = new Manager('Jared', 123, 'test@gmail.com', '01');
      expect(manager.getRole()).toBe(role);
    });
  
  //github // GitHub username
  
  //getGithub()