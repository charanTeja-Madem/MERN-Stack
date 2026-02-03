// Optional Chaining and Nullish Coalescing Operator
let student={
    name:"John",
    age:21
}
console.log(student.name);
console.log(student.age);   
console.log(student.marks);  //undefined
console.log(student.marks?.math??"property not found "); //property not found