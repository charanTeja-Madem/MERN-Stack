let test={
    a:1,
    b:2,
    c:3
}
//object de-structuring
let {a,b,c}=test;
console.log(a,b,c);

//object de-structuring with renaming
let {a:alpha,b:beta,c:gamma}=test;
console.log(a,b,c);