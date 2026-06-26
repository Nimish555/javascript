// for(let con = 1 ; con<= 5 ; con++){
//     console.log("hello nimish");
// }


// let i = 1;

// while(i<5){
//     console.log("kim");
//     i++;
// }

// for-of ----- string,array traverse
// let str = "fortuuner is love";
// let size = 0;
// for(let i of str ){
//     console.log("i--" , i);
//     size++;
// }
// console.log("size is" , size);

//for in loop --- for object
let student ={
    name: "nimish",
    class:"mca",
    id:45
};
for(let i in student){
    console.log(i);
}
for(let key in student){
    console.log("key=" , key, "value = ", student[key]);
}
