// let str = "anaconda";
// console.log(str.length);
// console.log(str[2]);

// //template litrals----------------------
let a = 'nimish';
console.log(a);

console.log("This is cost 10 rupees");
console.log(`This is cost ${10} rupees`);



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
console.log("This id is " , student.id , "student obj");

let av = `The id is ${student.id} and student name is ${student.name} `;
console.log(av);


let SpecialString = `this is the sum of 4 numbers ${4+5+6+7}`;
console.log(SpecialString);
console.log(typeof specialString);

console.log("Nimish\nChauhan\nRajput");

let str = "nimish min";
let s = "go go go go";
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.slice(1,3));
console.log(str.replace("min" , "king"));
console.log(s.replaceAll("go" , "min"));
console.log(str.concat(s));
console.log(str.charAt(2));
console.log(str.indexOf("s"));
console.log(str.startsWith("ni"));
console.log(str.endsWith("i"));
console.log(str.includes("mis"));
let arr = str.split("");
console.log(arr);
let b = "I Love Javascipt";
console.log(b.split(" "));
console.log(str.split(" " , 2));

 
// let a = Number(prompt("enter the number"));
// let b =  Number(prompt("enter the number"));

// let sum = a+b;
// console.log(sum);


