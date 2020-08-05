// Using class for Objects
class student {
    constructor(sId,sName,sBirthDate){
        this.sId = sId;
        this.sName = sName;
        this.sBirthDate = sBirthDate;
        this.school = 'TB High School';
    }
}
const student1 = new student(1,'benson','14-05-1996');
const student2 = new student(2,'shawon','20-06-1995');
console.log(student1.sId,student2.sId);
