function isEven(number) {
  number = Math.abs(number);
  
  if (number === 0) {
    return true;
  }
  
  if (number === 1) {
    return false;
  }
  
  return isEven(number - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false