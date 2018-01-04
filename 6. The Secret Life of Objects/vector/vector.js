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
};

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};

Vector.prototype.distance = function(vector) {
  return Math.sqrt(Math.pow((this.x - vector.x), 2) + Math.pow((this.y - vector.y), 2));
};

Vector.prototype.rotate = function(angle) { 
  // rotates a vector about (0, 0) in the counter-clockwise (positive) direction
  angle *= Math.PI/180; 
  return new Vector((this.x * Math.cos(angle)) - (this.y * Math.sin(angle)), 
                    (this.x *  Math.sin(angle)) + (this.y * Math.cos(angle)));
};

Vector.min = function(vectors) {
  // accepts either an array of vectors or explicit individual vectors
  // computes which vector has the smallest magnitude
  var min = 0;

  if (Array.isArray(vectors)) { 
    arguments = vectors;
  }

  for (var i = 0; i < arguments.length; i++) {
    min = smallerVector(min, arguments[i]);
  }

  return min;
};

function smallerVector(accumulator, vector) {
  if (accumulator.norm && accumulator.norm <= vector.norm) {
    return accumulator;
  }

  return vector;
};

if (typeof module != "undefined" && module.exports)
  module.exports = Vector;