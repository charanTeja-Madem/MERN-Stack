//joe promised jelly that she will give party if she crack the exam
//create promise
console.log("joe appeared for exam")
let futureavailability=true;
let promiseObj=new Promise((fullfil,reject)=>{
    setTimeout(()=>{
        if(futureavailability==true){
            fullfil("party at my place")
        }
         else{
            reject("joe unable to give party")
}        },5000)
})
console.log(promiseObj)
//consume promise
promiseObj.then((message)=>{
    console.log("Fulfilled: ",message)
}).catch((error)=>{
    console.log("Rejected: ",error)
})
console.log("hello")
