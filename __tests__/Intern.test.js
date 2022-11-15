const Intern = require("../lib/Intern");

test("school", () => {
  const school = "SCHOOL";
  const intern = new Intern("Jared", 123, "test@gmail.com", school);
  expect(intern.school).toBe("SCHOOL");
});

test("what school", () => {
  const school = "SCHOOL";
  const intern = new Intern("school", 123, "test@gmail.com", school);
  expect(intern.getSchool()).toBe(school);
});

test("testing role", () => {
  const school = "Intern";
  const intern = new Intern("school", 123, "test@gmail.com", "SCHOOL");
  expect(intern.getRole()).toBe(school);
});

// school

//getSchool()
