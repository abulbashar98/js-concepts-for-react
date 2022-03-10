

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
