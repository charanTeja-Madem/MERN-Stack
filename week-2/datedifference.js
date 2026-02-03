let date1=new Date("2022-01-15");
let date2=new Date("2023-03-10");
if (date2>date1){
    [date1,date2]=[date2,date1]; //swapping
}
let diffInTime=date1.getTime()-date2.getTime(); //in milliseconds
let diffInDays=diffInTime/(1000*3600*24);
console.log(`Difference between ${date1.toDateString()} and ${date2.toDateString()} is ${Math.floor(diffInDays)} days.`);