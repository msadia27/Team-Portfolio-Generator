const Employee = require("../lib/Employee");

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
  //   expect(employee.value).toEqual(expect.any(Number));
  });

test('testing name', () => {
  const name = "Jared";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test('testing id', () => {
    const id = 123;
    const Jared = new Employee('name', id);
    expect(Jared.id).toBe(123);
});

test('testing email', () => {
    const email = "test@gmail.com";
    const Jared = new Employee('name', 123, email);
    expect(Jared.email).toBe(email);
});

test('testing role', () => {
    const role = "Employee";
    //const email = "test@gmail.com";
    const Jared = new Employee('name', 123, 'test@gmail.com');
    expect(Jared.getRole()).toBe(role);
});