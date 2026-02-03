//make api request
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>console.log(" received:",data))
.catch(err=>console.log("Error occurred:", err));
//modern syntax to consume promise
async function getData(){
let res=await fetch('https://jsonplaceholder.typicode.com/posts')
let data=await res.json()
console.log("data using async await:",data)
}
getData();