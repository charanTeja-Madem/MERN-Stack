//student array of objects
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 23, grade: 78 },
  { name: "David", age: 21, grade: 88 },
];
//sum of ages of all students
const totalage=students.reduce((acc,ele)=>acc+ele.age,0)
console.log("Total age of all students:",totalage);
