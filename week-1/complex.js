//complex object
let complexObj = {
    id: 101,
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    department: "Development",
    salary: 80000,
    marks: [85, 90, 78, 92, 88],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    skills: ["JavaScript", "Python", "React"],
    getDetails: function() {
        //this keyword refers to the current object
        return `${this.name}, ${this.position} in ${this.department}`;
    }  , 
    getAverage: function() {
        let sum=0;
        for(let mark of this.marks) {
            sum += mark;
        }   
        return sum / this.marks.length;
    }
};
console.log(complexObj.getDetails());
console.log("Address:", complexObj.address.street, complexObj.address.city);
console.log("Skills:", complexObj.skills.join(" "));
console.log(complexObj.getAverage());