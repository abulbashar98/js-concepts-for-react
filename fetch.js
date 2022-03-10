
// JSON .....

const uniqueObject = {
    name: 'Yousuf Jamil Tamjid',
    age: 12,
    address: 'Dholaipar',
    isMad: true,
    family: {
        members: 6,
        sibling: 1,
        root: 'coomilla',
        brother: {
            name: 'I do not know',
            wife: 'true',
            child: 'false',
            nature: 'friendly'
        }
    },
    isMarried: true,
    docCaptaincy: function () {
        console.log(`Ny name is ${this.name}`)
    }

}

const uniqueObjectJson = JSON.stringify(uniqueObject);
console.log(uniqueObjectJson);

/*
{"name":"Yousuf Jamil Tamjid","age":12,"address":"Dholaipar","isMad":true,"family":{"members":6,"sibling":1,"root":"coomilla","brother":{"name":"I do not know","wife":"true","child":"false","nature":"friendly"}},"isMarried":true}
*/


const uniqueObjectParsed = JSON.parse(uniqueObjectJson);
console.log(uniqueObjectParsed);


/*
{
  name: 'Yousuf Jamil Tamjid',
  age: 12,
  address: 'Dholaipar',
  isMad: true,
  family: {
    members: 6,
    sibling: 1,
    root: 'coomilla',
    brother: {
      name: 'I do not know',
      wife: 'true',
      child: 'false',
      nature: 'friendly'
    }
  },
  isMarried: true
}
*/



// Fetch.....
/*
fetch('url')
    .then(respnonse => respnonse.json())
    .then(data => console.log(data))
*/

// keys,values.....
const keys = Object.keys(uniqueObject);
const values = Object.values(uniqueObject);


// for of on array like object (e.g: nodelist).....
// for in for object.....








const products = [
    { name: 'laptop', price: 55000, brand: 'iPhone', color: 'silver' },
    { name: 'camera', price: 75000, brand: 'canon', color: 'black' },
    { name: 'ear-buds', price: 18000, brand: 'apple', color: 'black' },
    { name: 'phone', price: 27000, brand: 'realme', color: 'white' },
    { name: 'tv', price: 52000, brand: 'samsung N570', color: 'black' },
    { name: 'key-board', price: 950, brand: 'A4tech', color: 'black' },
]

// Copy products and add a new one in array.....

const newProduct = { name: 'monitor', price: 8000, brand: 'Dell', color: 'black' }

const newArrayOfProducts = [...products, newProduct];
console.log(newArrayOfProducts);

/*
[
  { name: 'laptop', price: 55000, brand: 'iPhone', color: 'silver' },
  { name: 'camera', price: 75000, brand: 'canon', color: 'black' },
  { name: 'ear-buds', price: 18000, brand: 'apple', color: 'black' },
  { name: 'phone', price: 27000, brand: 'realme', color: 'white' },
  { name: 'tv', price: 52000, brand: 'samsung N570', color: 'black' },
  { name: 'key-board', price: 950, brand: 'A4tech', color: 'black' },
  { name: 'monitor', price: 8000, brand: 'Dell', color: 'black' }
]
*/


// Delete or remove one or more specific product and.....
// remove ear-bud....

const remaining = products.filter(product => product.name !== 'ear-buds');
console.log(remaining);

/*
[
  { name: 'laptop', price: 55000, brand: 'iPhone', color: 'silver' },
  { name: 'camera', price: 75000, brand: 'canon', color: 'black' },
  { name: 'phone', price: 27000, brand: 'realme', color: 'white' },
  { name: 'tv', price: 52000, brand: 'samsung N570', color: 'black' },
  { name: 'key-board', price: 950, brand: 'A4tech', color: 'black' }
]
*/
