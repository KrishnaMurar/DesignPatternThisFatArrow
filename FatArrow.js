class Student{

   constructor(name,age,marks){
       this.name = name;
       this.age = age;
     
       this.marks = marks;
     

   }

    eligibleAgeForPlacement(minAge){

        return (minMarks) => {
     
      let eligibleOrNot = ((this.age >= minAge && this.marks >= minMarks)?'Eligible for placement':'Not Eligible for placement')
     
 return (`${this.name} is ${eligibleOrNot}`);
}
}
}
let student1 = new Student('krishna',16,34);
let student2 = new Student('Murari',19,43);
let student3 = new Student('Rahul',25,52);
let student4 = new Student('Ranjna',13,28);
let student5 = new Student('Kashish',18,40);



console.log(student1.eligibleAgeForPlacement(18)(40));
console.log(student2.eligibleAgeForPlacement(18)(40));
console.log(student3.eligibleAgeForPlacement(18)(40));
console.log(student4.eligibleAgeForPlacement(18)(40));
console.log(student5.eligibleAgeForPlacement(18)(40));