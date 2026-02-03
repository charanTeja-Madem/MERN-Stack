//Creating Date Objects in JavaScript
let d=new Date()
let d1=new Date("2020-05-17")
let d2=new Date(2020,4,17) 
console.log(d)
console.log(d1)
console.log(d2)
console.log(Date.now())  //milliseconds from 1970 to now
//methods of Date object
console.log(d.getFullYear())    
console.log(d.getMonth())       //0-11
console.log(d.getDate())        //1-31
console.log(d.getDay())         //0-6
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())
console.log(d.getMilliseconds())
console.log(d.getTime())        //milliseconds from 1970 to now
