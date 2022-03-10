
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

// 3 ways of accessing Object properties 


// 1. direct or using destructuring...
console.log(uniqueObject.age);

// 2. By using the name of the property, But must be in a string......
console.log(uniqueObject['address']);

// 3. by using a variable which contains the name of the targeted property....
const maritalStatus = 'isMarried';
console.log(uniqueObject[maritalStatus]);