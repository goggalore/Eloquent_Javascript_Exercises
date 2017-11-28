// finds min of two numbers
function min(a, b) {
  if (isNaN(a) || isNaN(b)) throw Error('a and b must both be numbers');

  if (a < b) {
    return a; 
  }
  
  return b; 
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10