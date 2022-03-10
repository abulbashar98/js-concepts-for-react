// template String 

const numbers = [45, 56, 76, 76, 3, 5, 6565, 67, 8787];

const uniqueObject = {
    name: 'Yousuf Jamil Tamjid',
    age: 12,
    address: 'Dholaipar',
    isMad: true,
    isMarried: true,
    docCaptaincy: function () {
        console.log(`Ny name is ${this.name}`)
    }

}

const about = `My name is ${uniqueObject.name}, I am ${uniqueObject.age}, years old, I have ${numbers[6]} taka;`
console.log(about);


// Arrow function
const addThree = (x, y, z) => x + y + z;
const calculate = (a, v, c) => {
    const added = a + v + c;
    const multiplied = a * v * c;
    const result = added * multiplied;
    return result;
}


// Spread operator \

const newNumbers = numbers;
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(numbers);
//=====>[    45, 56,   76, 76,3,  5, 6565, 67, 8787, 99,   99, 99]

// to copy the exact 

const newNumbers2 = [91, ...numbers, 12]
numbers.push(999)
numbers.push(999)
numbers.push(999)
numbers.push(999);
console.log(numbers);
//====>[45,   56,  76,   76,   3,5, 6565,  67, 8787,  99,99, 99, 999,  999,  999, 999]
console.log(newNumbers2);

//====>[ 91, 45,   56, 76,   76,3,  5, 6565, 67, 8787,99, 99,  99, 12]