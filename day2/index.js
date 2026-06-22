// let name = "nimish" ;
// let age = 20;
// age = 23;
// console.log(name , age);
 
// const acc = 54;
// acc= 56;
// console.log(acc);

if(true){
    var c= 5;
}
console.log(c);

// -------------data types-----------

// primitive -- num , string , boolean , undef , bigint , symbol
//number------------------
let d = 45;
let o = 4.556;
console.log(d , o);

//string-------------
let r = "mercedes";
let h = "kk";
console.log(r,h);

//boolean-----------
let login = "true";
let j = "false";

//undefined-----------

let user;
const p  = 5;  //isko khali nhi chod sakte
console.log(user , p);

//bigint------
// let num = 456895698556n;
// console.log(num);

//symbol-----------
// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1);
// console.log(id2);
// console.log(id1 == id2);

//Array------------
// let arr = [10 , "kim" , true , 45 , 6];
// console.log(arr);
// console.log(typeof arr);

// let user1 = {
//     name : "nimish",
//     age : 22,
//     gender : 'male'
// }

//  let s = function add(){
//     console.log("hello");
// }

// console.log(s());
// console.log(typeof s);


// let a = 56;
// a=20;
// console.log(a);
// let str = "erm";
// str = "happy";
// console.log(str);

// console.log(str[2]);

//non primitive datatype are mutable
let arr = [4 , 5 , 6 , 9];
arr.push(45);
arr[1] = 69;
console.log(arr);

let obj = {
    name : "Mohan",
    age  : 54
}

// obj.name = "rohan";
console.log(obj.name);

 let obj2 = obj;
 obj2.name = "Rohan";
 console.log(obj);