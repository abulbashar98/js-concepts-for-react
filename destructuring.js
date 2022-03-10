// Array destructuring.....
const numbers = [556, 4454, 34, 678, 3434, 76, 887, 8989];
const [a, , b, , c, , d] = numbers;
console.log(c, d);


// make arrays...

function boxify(num1, num2, num3, num4, num5, num6, num7) {
    const box = [num1, num2, num3, num4, num5, num6, num7]
    return box;
}


const [first, , , , fifth, , seventh] = boxify(1, 2, 3, 4, 5, 6, 7);
console.log(first, seventh);
//=====> 1 7


// const outCome = boxify(1, 2, 3, 4, 5, 6, 7);
// console.log(outCome)



// Object destructuring....

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

const { name, isMarried } = uniqueObject;
console.log(name, isMarried);
//=====> Yousuf Jamil Tamjid true

const { root } = uniqueObject.family;
console.log(root);


const { child, nature } = uniqueObject?.family?.brother;
console.log(child, nature);

