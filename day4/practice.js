// alert("hello");
// let num = prompt("Enter a number :: ");
// if(num%5 == 0 ){
//     console.log(num , "is multiple of 5");
// }else{
//     console.log(num , "is not multiple of 5");
// }


let score = prompt("enter num ::");
let grade;
if(score<=100 && score >=90){
    grade ="A";
 } else if (score <= 89 && score >= 80) {
    grade = "B";
} else if (score <= 79 && score >= 70) {
    grade = "C";
} else if (score <= 69 && score >= 60) {
    grade = "D";
}else{
    grade = "f";
}
console.log("according to score grade is " , grade);
