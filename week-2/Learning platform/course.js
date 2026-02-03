import { courses } from "./data.js";   
//  -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably

//  -> Get published courses
let published=courses.filter(course=>course.published==true);
console.log("Published Courses:", published);
//  -> Sort courses by price (high → low)
let sorted=published.sort((a,b)=>b.price-a.price);
console.log("Sorted Published Courses by Price (High to Low):", sorted);
//  -> Extract { title, price } only
let extracted=sorted.map(course=>({title:course.title,price:course.price}));
console.log("Extracted Course Titles and Prices:", extracted);
//  -> Calculate total value of published courses
let totalValue=published.reduce((total,course)=>total+course.price,0);
console.log("Total Value of Published Courses:", totalValue);
//  -> Add a new course immutably
let newCourse={title:"New Course",price:999,published:true};
let updatedCourses=[...published,newCourse];
console.log("Updated Courses with New Course:", updatedCourses);