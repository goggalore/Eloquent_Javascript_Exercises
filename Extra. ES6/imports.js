import { Vector, isMultipleOf, goldenRatio } from './exports.js';

console.log(Vector.add(new Vector(4, 5), new Vector(1, 2)));
console.log(isMultipleOf(4, 2)); 
console.log(goldenRatio);

// we can also use default exports, so that the name for a variable, function, etc. 
// need not be the same in the import file