
const x = 50;
const y = 100;



const values = {
    x: x,
    y: y
}
console.log(values.y);
//====> 100

// shorthand....

const values2 = { x, y };
console.log(values2.x);
//=====> 50

// One more Eg.....

const name = 'Akbar';
const empire = 'Mughal';


const emperor = { name, duration: 700, capital: 'Delhi', empire }
console.log(emperor.name, emperor.empire);
//=====> Akbar Mughal