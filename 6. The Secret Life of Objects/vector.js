function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Object.defineProperty(Vector.prototype, 'norm', {
  get: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
});

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
}

Vector.prototype.distance = function(vector) {
  return Math.sqrt(Math.pow((this.x - vector.x), 2) + Math.pow((this.y - vector.y), 2));
}

Vector.min = function(vectors) {
  // accepts either an array of vectors or explicit individual vectors
  var min = 0;

  if (Array.isArray(vectors)) { 
    arguments = vectors;
  }

  for (var i = 0; i < arguments.length; i++) {
    min = smallerVector(min, arguments[i]);
  }

  return min;
}

function smallerVector(accumulator, vector) {
  if (accumulator.norm && accumulator.norm <= vector.norm) {
    return accumulator;
  }

  return vector;
} 

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).norm);
// → 5
console.log(new Vector(2, 2).distance(new Vector(6, 5)));
// → 5
console.log(Vector.min([new Vector(2, 2), new Vector(2, 5), new Vector(3, 5)]));
// → Vector {x: 2, y: 2}
console.log(Vector.min(new Vector(2, 2), new Vector(2, 5), new Vector(3, 5)))
// → Vector {x: 2, y: 2}

if (typeof module != "undefined" && module.exports)
  module.exports = Vector;