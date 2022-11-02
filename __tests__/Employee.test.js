const Employee = require("./lib/Employee");

test('creates employee object', () => {
    const employee = new Employee();
    expect(employee.name).toBe('employee object');
  //   expect(employee.value).toEqual(expect.any(Number));
  });

test('testing name', () => {
  const name = "Jared";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test('testing id', () => {
    const id = "id";
    const employee = new employee(id);
    expect(employee.id).toBe(id);
});

test('testing email', () => {
    const email = "email";
    const employee = new employee(email);
    expect(employee.email).toBe(email);
});

test('testing role', () => {
    const role = "role";
    const employee = new employee(role);
    expect(employee.role).toBe(role);
});