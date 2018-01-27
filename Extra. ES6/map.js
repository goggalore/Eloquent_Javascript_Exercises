// A Map object iterates its elements in insertion order

// Traditionally Objects were used as maps,
// however there are distinctions with Map

// i.e. 

// Keys of an Object are Strings and Symbols
// whereas they can be any value for a Map (functions, objects, ...)

// Can easily get the size of a Map whereas this must be
// determined manually for an Object

// A map is iterable and can be directly iterated
// whereas an object requires obtaining keys in some fashion

// Object has a prototype, collision of keys possible
// Map has no initial values

// A Map may perform better in cases involving frequent
// insertions or deletions of key pairs

const fibonacciMap = (size) => {    
    let current = 0;
    let next = 1;

    let fibonacci = new Map();

    for (let i = 0; i < size; i++) {
        fibonacci.set(i, current);
        [current, next] = [next, current + next];
    };

    return fibonacci;
}

const fibonacci = fibonacciMap(10);

console.log(fibonacci.get(0)); // 0th fibonacci number is 0
console.log(fibonacci.get(1)); // 1st fibonacci number is 1
console.log(fibonacci.get(5)); // 5th fibonacci number is 5
console.log(fibonacci.get(6)); // 6th fibonacci number is 8
console.log(fibonacci.get(8)); // 8th fibonacci number is 21

// we can iterate through this map

for (let [term, value] of fibonacci) {
    let string = '';

    if (term === 1) {
        string = '1st';
    }

    else if (term === 2) {
        string = '2nd';
    }

    else {
        string = term.toString() + 'th';
    }

    console.log(`The ${string} term of the fibonacci numbers is ${value}`);
}

// the forEach method works similarly

// we can also use 2D key valued arrays to define maps

let kvArray = [['key1', 'hello'], ['key2', 'world!']];
let kvMap = new Map(kvArray);

console.log(kvMap.get('key1'));
console.log(kvMap.get('key2'));



// alternitively, there exist WeakMaps. Primitive data types are not allowed
// as keys and keys are of the time Object ONLY. 

// avoids memory leak in that keys can be garbage collected

// they are useful when mapping keys to information
// is only valuable if the key has not been garbage collected