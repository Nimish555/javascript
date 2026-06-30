let arr = ["aman" , "kim" , "lalit"];
let arr1 = [56 , 69 , 87 , 65];
let arr2=["do" , "pooja" , "giga" , "rigid"];

// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr);
// console.log(typeof arr);
// console.log(arr.push("rahul"));
// // console.log(arr.pop());
// console.log(arr.unshift("pop"));
// console.log(arr.concat(arr1));
// console.log(arr.slice(0,2));
// console.log(arr.reverse());
// arr.push("Willy");
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.toString(arr));






// for(let names of arr ){
// console.log(names.toUpperCase());
// }

// //splice--------

// // console.log(arr1.splice(2,3));
// console.log(arr1.splice(2,69,55));
// console.log(arr1);
// console.log(arr);


// console.log(arr.length);

// let std = ["Thor" , "Spiderman" , "hulk" , "Ranger" , "Loki"];
// for(let i = 0 ; i<std.length ; i++){
//     console.log(std[i]);
// }

// //avg marks
// let arr2 = [32 , 56 , 88 ,99];
// let sum = 0;
// for(let i = 0 ; i<arr2.length ; i++){
//     sum = sum +arr2[i];
// }

// let avg = sum / 2;
// console.log(sum);
// console.log(`average marks of class = ${avg}`);


// 10 per off , change array
let num =[45 , 56 , 89 ,65];

let index = 0;
for(let s in num){
let v = (10 * s)/100;
num[index] = s - v;
index++;

}
console.log(`off prices is ${num} in array`);

let num1 = [1 , 2 , 5 , 6 , 7];
//delete-------
console.log(num1.splice(1 , 2 , 66 , 77));

//replace------
console.log(num1.splice(2 , 1 , 101));

//add element-----
console.log(num1.splice(3 ,0,47));

//practice--------------------------




let array = ["bloomberg" , "Microsoft" , "ibm" , "ola" , "uber"];
// let rem = array.shift();
// console.log(`after remove of first element ${array}`);

let rem1 = array.splice(2 , 1 ,"flip");
console.log(array);

let addd = array.push("Amazon");
console.log(array);


