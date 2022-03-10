

let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}



let myMoney = -50;
if (!myMoney) {
    console.log('falsy')
}
else {
    console.log('true')
}



/*-------------- *\
  Ternary Operator
\*-----------------*/
/*
const money = 75;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'dal-vat'
}
*/


// const money = 75;
const money = 175;
let food;


// single condition 
const food1 = money > 100 ? 'biryani' : 'dal-vat';
console.log(food1);

// Multiple Conditions 
const food2 = (money < 200 && money > 100) ? 'kachchi' : 'nan - grill';
console.log(food2);




/*-------------- *\
   Shortcuts
\*-----------------*/


// convert to string........

let amount = 5000;
amountStr = amount + '';
console.log(amountStr);



// Convert to number.....

const amountText = '7890021';
const amountNum = +amountText;
console.log(amountNum);




// short cut uses of && and || when we dont need a 
// return lke we get after ternary operator ........

let isActive = false;

const showUser = () => {
    console.log('User shown')
}

const hideUser = () => {
    console.log('User hidden')
}

// 1. if variable is true function execution is true..... 

isActive && showUser();


// 2. if  variable is false function execution is true.....
//    if  variable is true function execution is false.....
isActive || hideUser();



// toggle boolean 

isActive = !isActive;
