const Intern = require("../lib/Intern");

test('school', () => {
    const school = "SCHOOL";
    const intern = new Intern();
    expect(intern.school).toBe('school');
  });
  
  test('school return', () => {
    const school = "SCHOOL";
    const intern = new Intern("github name", id, email, school);
    expect(intern.getSchool()).toBe('school');
  });
  
  test('role', () => {
      const school = "Intern";
      const intern = new Intern("github name", id, email, school);
      expect(intern.getRole()).toBe('school');
    });
  
  //github // GitHub username
  
  //getGithub()