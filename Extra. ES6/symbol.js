// Symbols are a new primitive data type

// The Symbol() function returns a vlue of type symbol
// Each symbol value returned from Symbol()
// and hence may be used as an identifier for object properties

// this is the data type's only purpose

const symbol1 = Symbol();
const symbol2 = Symbol('foo');
const symbol3 = Symbol('foo');

console.log(symbol2 === symbol3); // false

// Symbol() is incomplete as a a constructor since it does 
// not support the syntax "new Symbol()"