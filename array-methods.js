const products = [
    { name: 'laptop', price: 55000, brand: 'iPhone', color: 'silver' },
    { name: 'camera', price: 75000, brand: 'canon', color: 'black' },
    { name: 'ear-buds', price: 18000, brand: 'apple', color: 'black' },
    { name: 'phone', price: 27000, brand: 'realme', color: 'white' },
    { name: 'tv', price: 52000, brand: 'samsung N570', color: 'black' },
    { name: 'key-board', price: 950, brand: 'A4tech', color: 'black' },
]

const brands = products.map(product => product.brand);
// console.log(brands);

const prices = products.map(product => product.price);
// console.log(prices);

// products.forEach(product => console.log(product.color));


const firstBlack = products.find(product => product.color === 'black');
// console.log(firstBlack);
//=====>{ name: 'camera', price: 75000, brand: 'canon', color: 'black' }



const allBlacks = products.filter(product => product.color === 'black')
console.log(allBlacks);

/*
[
  { name: 'camera', price: 75000, brand: 'canon', color: 'black' },
  { name: 'ear-buds', price: 18000, brand: 'apple', color: 'black' },
  { name: 'tv', price: 52000, brand: 'samsung N570', color: 'black' },
  { name: 'key-board', price: 950, brand: 'A4tech', color: 'black' }
]
*/