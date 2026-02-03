//shallow copy
let obj1 = { a: 1, b: 2 };
let obj2 = obj1; 
obj2.a = 10;
console.log("Shallow Copy:");
console.log("obj1:", obj1);
console.log("obj2:", obj2);
//deepcopy
let deepcopy={...obj1};
obj1.c=3
console.log("Deep Copy:");
console.log("obj1:", obj1);
console.log("deepcopy:", deepcopy);