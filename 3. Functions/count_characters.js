function countBs(string) {
  var letter = 'B';
  var counter = 0;
  
  string = string.split('');
  for(var i = 0; i < string.length; i++){
    if (string[i] === letter) {
      counter++;
    }
  }
  
  return counter;
}

// generalized
function countChar(string, letter) {
  var counter = 0;
  
  string = string.split('');
  
  for(var i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter++;
    }
  }
  
  return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4