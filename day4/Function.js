function myFunction(){
    console.log("cannada");
    console.log("fill");
};

myFunction();




function call(msg){    //parameter
    console.log(msg);

}

call("I love java"); //argument


//sum function
function sum(a,b){
let s = a+b;   //local variable
console.log("sum");
return s;
}

let v = sum(4,5);
console.log(v);

//let   vs   var

function Diff(){
    if(true){
        let v = 10;
        var c = 23;
        console.log(v);
    }

    console.log(c);
    console.log(v);
}

Diff();


//cons fumction

const arrowSum = (a,b) => {
    console.log(a+b);
};

//multiplication
function multi(a,b){
    return a*b;
};

const arrowMul = (a,b) => {
    console.log(a*b);
};



let f =  [44 , 58 , 98 , 78 , 56];
f.forEach((val) => {
    console.log(val);
}
)
    

let b = ["pune" , "agra" , "delhi" , "mumbai"];
b.forEach((val , idx) => {
    console.log(val.toUpperCase() , idx);
}

) ;


 




