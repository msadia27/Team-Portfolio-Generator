const Engineer = require("./lib/Engineer");

test('github', () => {
  const testGitHub = "github name";
  const engineer = new Engineer();
  expect(engineer.github).toBe('testGitHub');
});

test('github return', () => {
  const testGitHub = "github name";
  const engineer = new Engineer("github name", id, email, testGitHub);
  expect(engineer.getGithub()).toBe('testGitHub');
});

test('role', () => {
    const testRole = "Engineer";
    const engineer = new Engineer("github name", id, email, testGitHub);
    expect(engineer.getRole()).toBe('testRole');
  });

//github // GitHub username

//getGithub()