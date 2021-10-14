// alert("Welcome to JS")


// 3 keywords for declaring a variable in js

// var , let, const

// var keyword variables are global scope variable as well as function scope variable
// let keyword variables are block scope variable as well as function scope variable
//const keyword variable for a constant value variable


// hoisting - whatever declaration part of variable as well as is there that is hoisted at the top

// num1= 20;
// console.log(num1)
// var num1;


let num1;
num1=258
console.log(num1)



num1=35;




if(true){
    console.log(num1)
    
    var num2 = 100;

    console.log(num2)

}


function displayNum() {
    var num3 = 150;
    console.log(num3)
}

displayNum()
console.log(num2)
console.log(num3)

