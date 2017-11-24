function incrementDown(start, end, increment) { 
  var array = [];
  
  for(start; start >= end; start += increment) {
    array.push(start);
  }
  
  return array;
}

function incrementUp(start, end, increment) {
  var array = [];
  
  for (start; start <= end; start += increment) {
    array.push(start);
  }
  
  return array;
}

function range(start, end, increment) {
  if (increment === undefined || increment === 0) {
    increment = 1;
  }
  
  if (start > end) {
    increment = -1;
  }

  if (increment > 0) {
    return incrementUp(start, end, increment);
  }
  
  if (increment < 0) {
    return incrementDown(start, end, increment);
  }
  
  return null;
}

function sum(array) {
  return array.reduce(function(a, b) {return a + b});
} 

//without using reduce method
function simpleSum(array) {
  var current = 0;

  for(var i = 0; i < array.length; i++) {
    current += array[i];
  }

  return current;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(1, 20, 2));
// → [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(sum(range(1, 10)));
// → 55
console.log(sum(range(1, 20, 2)));
// → 110