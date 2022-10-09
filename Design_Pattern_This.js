//'use strict'
class Student{
     static count = 0;
    constructor(name,age,phone_number,board_marks){
        this.name = name;
        this.age = age;
        this.phone_number = phone_number;
        this.board_marks = board_marks;
        Student.countCandiate();

    }

    static countCandiate(){
        return(Student.count++);    
    }
     eligible(){
      
       let eligibleOrNot = ((this.board_marks >= 40)?'Eligible':'Not Eligible')
      
return (`${this.name}  age,  ${this.age} is ${eligibleOrNot}`);
}
}
 let results1 = new Student('krishna',27,7004093883,34);
 let results2 = new Student('Murari',26,201254585,43);
 let results3 = new Student('Rahul',25,708545,52);
 let results4 = new Student('Ranjna',24,78794422,28);
 let results5 = new Student('Kashish',27,7004093883,11);

 console.log(Student.countCandiate());

 console.log(results1.eligible());
 console.log(results2.eligible());
 console.log(results3.eligible());
 console.log(results4.eligible());
 console.log(results5.eligible());