let employee = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    department: "Development",salary: 80000
};
employee.city = "New York";
employee.salary = 85000;
delete employee.department;
console.log(employee);
//keys
console.log(Object.keys(employee));
//values
console.log(Object.values(employee));
//entries
console.log(Object.entries(employee));