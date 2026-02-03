// creating a class
class Student{
    sid;
    sname;
    constructor(sid,name){
        this.sid=sid;
        this.sname=name;
    }
    getStudentDetails(){
        console.log("name:",this.sname,"id:",this.sid);
    }
}
// creating objects
let s1=new Student("q65" ,"charan");
let s2=new Student("q66" ,"vinay");
s1.getStudentDetails();
s2.getStudentDetails();