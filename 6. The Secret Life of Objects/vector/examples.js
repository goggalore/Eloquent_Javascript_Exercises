const Vector = require('./vector.js');

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(1, 2).rotate(90));
// → Vector { x: -2, y: 1.0000000000000002 }
console.log(new Vector(3, 4).norm);
// → 5
console.log(new Vector(2, 2).distance(new Vector(6, 5)));
// → 5
console.log(Vector.min([new Vector(2, 2), new Vector(2, 5), new Vector(3, 5)]));
// → Vector {x: 2, y: 2}
console.log(Vector.min(new Vector(2, 2), new Vector(2, 5), new Vector(3, 5)))
// → Vector {x: 2, y: 2}