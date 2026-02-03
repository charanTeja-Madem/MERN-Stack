// console.log("first")
// //for(let i=10;i<10000000;i++){}
// setTimeout(()=>{
//     console.log("hello")},5000);

// console.log("second")
//person-1 ordered biryani(5 sec)
console.log("person-1 ordered biryani")
setTimeout(()=>{
console.log("person 1 recieved biryani")
},5000)
//person-2 ordered rice(2 sec)
console.log("person-2 ordered rice")
setTimeout(()=>{
console.log("person 2 recieved rice")
},2000)

//person-1 ordered bottle(1 sec)
console.log("person-3 ordered bottle")
setTimeout(()=>{
console.log("person 3 recieved bottle")
},1000)
console.log("hello")