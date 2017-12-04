// reverses array by producing a new array
function reverseArray(array) {
  var reversed = [];
  const LENGTH = array.length;
  
  for (var i = 0; i < LENGTH; i++){
    reversed.push(array.pop());
  }
  
  return reversed;
}

// reverses array by modifying the array given in argument
function reverseArrayInPlace(array) {
  var temp;
  
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
  
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]