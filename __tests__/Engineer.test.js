const Engineer = require("../lib/Engineer");

test("github", () => {
  const GitHub = "github name";
  const engineer = new Engineer("Jared", 123, "test@gmail.com", GitHub);
  expect(engineer.GitHub).toBe(GitHub);
});

test("github return", () => {
  const GitHub = "github name";
  const engineer = new Engineer("Jared", 123, "test@gmail.com", GitHub);
  expect(engineer.getGitHub()).toBe(GitHub);
});

test("role", () => {
  const role = "Engineer";
  const engineer = new Engineer("Jared", 123, "test@gmail.com", "github name");
  expect(engineer.getRole()).toBe(role);
});

//github // GitHub username

//getGithub()
