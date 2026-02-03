let student={
    sno: 1,
    name:"joe",
    age:20
}
console.log(typeof student)
let studentJson=JSON.stringify(student)
console.log(typeof studentJson)
let data=JSON.parse(studentJson)
console.log(data)
console.log(typeof data)