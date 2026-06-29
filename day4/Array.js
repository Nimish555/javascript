let arr = ["aman" , "kim" , "lalit"];
let arr1 = [56 , 69 , 87 , 65];

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

for(let names of arr ){
console.log(names.toUpperCase());
}

//splice--------

// console.log(arr1.splice(2,3));
console.log(arr1.splice(2,69,55));
console.log(arr1);
console.log(arr);


console.log(arr.length);

let std = ["Thor" , "Spiderman" , "hulk" , "Ranger" , "Loki"];
for(let i = 0 ; i<std.length ; i++){
    console.log(std[i]);
}

//avg marks
let arr2 = [32 , 56 , 88 ,99];
let sum = 0;
for(let i = 0 ; i<arr2.length ; i++){
    sum = sum +arr2[i];
}

let avg = sum /2;
console.log(sum);
console.log(`average marks of class = ${avg}`);
